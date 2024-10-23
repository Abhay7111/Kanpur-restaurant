import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    tableNo: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        contactNo: formData.contactNo,
        tableNo: formData.tableNo,
        date: formData.date,
        time: formData.time,
        message: formData.message,
        access_key: 'f95db6c2-e104-4272-a107-64917ce2e60a' // Replace with your actual access key
      }),
    });

    if (response.ok) {
      setIsSubmitted(true); // Set submission state to true
    } else {
      console.error('Error submitting form data');
    }
  };

  const handleDownloadPDF = () => {
    const pdfContent = `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Contact No:</strong> ${formData.contactNo}</p>
      <p><strong>Table No:</strong> ${formData.tableNo}</p>
      <p><strong>Date:</strong> ${formData.date}</p>
      <p><strong>Time:</strong> ${formData.time}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;

    const element = document.createElement('div');
    element.innerHTML = pdfContent;
    document.body.appendChild(element);

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 5, 10);
      doc.save("contact_form_submission.pdf");
      document.body.removeChild(element);
    });
  };
  const handleDownloadWEBP = () => {
    const webpContent = `
      <div class="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg text-white w-96">
          <h1 class="text-center text-2xl font-bold">Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Contact No:</strong> ${formData.contactNo}</p>
          <p><strong>Table No:</strong> ${formData.tableNo}</p>
          <p><strong>Date:</strong> ${formData.date}</p>
          <p><strong>Time:</strong> ${formData.time}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
      </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = webpContent;
    document.body.appendChild(element);

    html2canvas(element).then((canvas) => {
      const webpData = canvas.toDataURL('image/webp');
      const link = document.createElement('a');
      link.href = webpData;
      link.download = 'contact_form_submission.webp';
      link.click();
      document.body.removeChild(element);
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center h-fit bg-gray-800 py-20">
      <img 
        src="https://cdn.pixabay.com/photo/2023/06/20/10/05/tacos-8076612_1280.jpg" 
        alt="Contact Background" 
        className="fixed top-0 left-0 w-full h-full object-cover z-[-5] opacity-70" 
      />
      <div className="relative min-w-[60vw] z-10 py-12 px-8 bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-4">Contact Us</h1>
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">We'd love to hear from you about our restaurant!</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="contactNo"
              placeholder="Contact No." 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.contactNo}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="tableNo"
              placeholder="Table No." 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.tableNo}
              onChange={handleChange}
              required 
            />
            <input 
              type="date" 
              name="date"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
            <input 
              type="time" 
              name="time"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.time}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              className="p-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
            <div className='w-full flex items-center justify-around'>
              <button 
                type="submit" 
                className="text-sm bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
              >
                Send Message
              </button>
              {isSubmitted && ( // Show download buttons only after submission
                <>
                  <button 
                    type="button" 
                    onClick={handleDownloadPDF}
                    className="text-sm bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
                  >
                    Download PDF
                  </button>
                  <button 
                    type="button" 
                    onClick={handleDownloadWEBP}
                    className="text-sm bg-yellow-600 text-white py-2 px-3 rounded-lg hover:bg-yellow-700 transition duration-300 font-medium"
                  >
                    Download WEBP
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className='h-full'>
        <div className="flex-1 flex items-start justify-center">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Your Submission Data</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Contact No:</strong> {formData.contactNo}</p>
            <p><strong>Table No:</strong> {formData.tableNo}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;