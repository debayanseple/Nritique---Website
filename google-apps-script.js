/**
 * Google Apps Script Web App Endpoint for Nritya Dance Academy registrations and enquiries.
 * Paste this code inside Extensions > Apps Script of your target Google Sheet,
 * then deploy it as a Web App ("Execute as: Me", "Who has access: Anyone").
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: "error", message: "No post data found" });
    }

    var data = JSON.parse(e.postData.contents);
    
    var sheetName = "Enquiries";
    if (data.type === "class") {
      sheetName = "Classes";
    } else if (data.type === "workshop") {
      sheetName = "Workshops";
    }

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
      } else if (data.type === "workshop") {
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
      } else {
        sheet.appendRow([
          "Timestamp",
          "Name",
          "Email",
          "Phone",
          "Message"
        ]);
        sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#F5EBEB");
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
    } else if (data.type === "workshop") {
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
    } else {
      sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.message
      ]);
    }

    // Auto-resize columns
    sheet.autoResizeColumns(1, data.type === "enquiry" ? 5 : 9);

    // Send email notification to Admin
    var adminEmail = "debayan.seple@gmail.com";
    var subject = "New " + (data.type === "class" ? "Registration" : (data.type === "workshop" ? "Workshop Booking" : "Enquiry")) + ": " + 
      (data.type === "class" ? data.batchName : (data.type === "workshop" ? data.workshopTitle : data.name));

    var adminBody = "Hello Nritya Academy Admin,\n\n";
    adminBody += "A new submission has been received and logged in the Google Sheet.\n\n";
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
    } else if (data.type === "workshop") {
      adminBody += "Type: Workshop Reservation\n";
      adminBody += "Workshop: " + data.workshopTitle + "\n";
      adminBody += "Student Name: " + data.name + "\n";
      adminBody += "Email: " + data.email + "\n";
      adminBody += "Phone: " + data.phone + "\n";
      adminBody += "Experience Level: " + data.level + "\n";
      adminBody += "Format: " + (data.format || "N/A") + "\n";
      adminBody += "Date: " + (data.date || "N/A") + "\n";
      adminBody += "Fee: INR " + (data.fee || "N/A") + "\n";
    } else {
      adminBody += "Type: General Enquiry\n";
      adminBody += "Name: " + data.name + "\n";
      adminBody += "Email: " + data.email + "\n";
      adminBody += "Phone: " + data.phone + "\n";
      adminBody += "Message: " + data.message + "\n";
    }
    adminBody += "--------------------------------------\n\n";
    adminBody += "View the Google Sheet to manage submissions.\n";
    adminBody += "Best regards,\nNritya Academy Automation System";

    MailApp.sendEmail(adminEmail, subject, adminBody);

    // Send confirmation email to the student / user
    var studentEmail = data.email;
    var studentName = data.type === "class" ? data.student : data.name;
    var studentSubject = data.type === "enquiry" ? "Thank you for reaching out - Nritya Dance Academy" : "Your Registration at Nritya Dance Academy";

    var studentBody = "Dear " + studentName + ",\n\n";
    if (data.type === "enquiry") {
      studentBody += "Thank you for reaching out to Nritya Dance Academy! We have successfully received your enquiry.\n\n";
      studentBody += "Here is a copy of the message you sent us:\n";
      studentBody += "--------------------------------------\n";
      studentBody += "Message: " + data.message + "\n";
      studentBody += "--------------------------------------\n\n";
      studentBody += "Our team will review your enquiry and get back to you via WhatsApp/Email within 24 hours.\n\n";
    } else {
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
      studentBody += "Our team will review your application and get in touch with you via WhatsApp/Email within 24 hours to confirm your schedule and enrollment details.\n\n";
    }
    studentBody += "If you have any questions, feel free to reply directly to this email.\n\n";
    studentBody += "Best regards,\n";
    studentBody += "Nritya Dance Academy Team\n";
    studentBody += "Kolkata, India";

    try {
      MailApp.sendEmail(studentEmail, studentSubject, studentBody);
    } catch (studentEmailError) {
      console.warn("Could not send confirmation email: " + studentEmailError.toString());
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
