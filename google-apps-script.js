/**
 * Google Apps Script Web App Endpoint for Nritya Dance Academy registrations.
 * Paste this code inside Extensions > Apps Script of your target Google Sheet,
 * then deploy it as a Web App ("Execute as: Me", "Who has access: Anyone").
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: "error", message: "No post data found" });
    }

    var data = JSON.parse(e.postData.contents);
    var sheetName = data.type === "class" ? "Classes" : "Workshops";
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);

    // Create sheet and headers if they don't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (data.type === "class") {
        sheet.appendRow([
          "Timestamp",
          "Student Name",
          "Age",
          "Parent Name",
          "Email",
          "Phone",
          "Level",
          "Preferred Start Date",
          "Batch Name",
        ]);
        sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#EAD8C0");
      } else {
        sheet.appendRow([
          "Timestamp",
          "Name",
          "Email",
          "Phone",
          "Level",
          "Workshop Title",
          "Fee Paid (INR)",
          "Date",
          "Format",
        ]);
        sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#D2E9E9");
      }
      sheet.setFrozenRows(1);
    }

    var timestamp = new Date();
    if (data.type === "class") {
      sheet.appendRow([
        timestamp,
        data.student,
        data.age,
        data.parent || "N/A",
        data.email,
        data.phone,
        data.level,
        data.startDate,
        data.batchName,
      ]);
    } else {
      sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.level,
        data.workshopTitle,
        data.fee || "",
        data.date || "",
        data.format || "",
      ]);
    }

    // Auto-resize columns
    sheet.autoResizeColumns(1, 9);

    // Send email notification to Admin
    var adminEmail = "debayan.seple@gmail.com";
    var subject =
      "New Registration: " + (data.type === "class" ? data.batchName : data.workshopTitle);

    var adminBody = "Hello Nritya Academy Admin,\n\n";
    adminBody += "A new registration has been received and logged in the Google Sheet.\n\n";
    adminBody += "--------------------------------------\n";
    if (data.type === "class") {
      adminBody += "Type: Class Registration\n";
      adminBody += "Batch: " + data.batchName + "\n";
      adminBody += "Student Name: " + data.student + "\n";
      adminBody += "Age: " + data.age + "\n";
      if (data.parent && data.parent !== "N/A") {
        adminBody += "Parent Name: " + data.parent + "\n";
      }
      adminBody += "Email: " + data.email + "\n";
      adminBody += "Phone: " + data.phone + "\n";
      adminBody += "Experience Level: " + data.level + "\n";
      adminBody += "Preferred Start Date: " + data.startDate + "\n";
    } else {
      adminBody += "Type: Workshop Reservation\n";
      adminBody += "Workshop: " + data.workshopTitle + "\n";
      adminBody += "Student Name: " + data.name + "\n";
      adminBody += "Email: " + data.email + "\n";
      adminBody += "Phone: " + data.phone + "\n";
      adminBody += "Experience Level: " + data.level + "\n";
      adminBody += "Format: " + (data.format || "N/A") + "\n";
      adminBody += "Date: " + (data.date || "N/A") + "\n";
      adminBody += "Fee: INR " + (data.fee || "N/A") + "\n";
    }
    adminBody += "--------------------------------------\n\n";
    adminBody += "View the Google Sheet to manage registrations.\n";
    adminBody += "Best regards,\nNritya Academy Automation System";

    MailApp.sendEmail(adminEmail, subject, adminBody);

    // Send confirmation email to the student
    var studentEmail = data.type === "class" ? data.email : data.email;
    var studentName = data.type === "class" ? data.student : data.name;
    var studentSubject = "Your Registration at Nritya Dance Academy";

    var studentBody = "Dear " + studentName + ",\n\n";
    studentBody += "Thank you for registering at Nritya Dance Academy!\n\n";
    studentBody += "We have successfully received your information:\n";
    studentBody += "--------------------------------------\n";
    if (data.type === "class") {
      studentBody += "Class Batch: " + data.batchName + "\n";
      studentBody += "Preferred Start Date: " + data.startDate + "\n";
    } else {
      studentBody += "Workshop: " + data.workshopTitle + "\n";
      studentBody += "Format: " + (data.format || "N/A") + "\n";
      studentBody += "Date: " + (data.date || "N/A") + "\n";
    }
    studentBody += "--------------------------------------\n\n";
    studentBody +=
      "Our team will review your application and get in touch with you via WhatsApp/Email within 24 hours to confirm your schedule and enrollment details.\n\n";
    studentBody += "If you have any questions, feel free to reply directly to this email.\n\n";
    studentBody += "Best regards,\n";
    studentBody += "Nritya Dance Academy Team\n";
    studentBody += "Kolkata, India";

    try {
      MailApp.sendEmail(studentEmail, studentSubject, studentBody);
    } catch (studentEmailError) {
      console.warn("Could not send confirmation email to student: " + studentEmailError.toString());
    }

    return createJsonResponse({ status: "success" });
  } catch (err) {
    return createJsonResponse({ status: "error", message: err.toString() });
  }
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
