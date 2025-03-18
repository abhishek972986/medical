import React from "react";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import nurse from "./images/nurse.jpeg";
import doc from "./images/New York Facial Plastic Surgery.jpeg";
import doct from "./images/dr.jpeg";

const Aboutus = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6">
      <Navbar />

      {/* About Us Header */}
      <div className="flex flex-col items-center text-center gap-6 mt-10 w-full">
        <div className="text-xl font-semibold text-gray-600">ABOUT US</div>
        <div className="text-6xl font-bold">
          We <span className="text-purple-800">Care for Your</span> <br />
          Best <span className="text-purple-800">Health</span>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="max-w-5xl mx-auto text-center mt-12 px-6">
        <h2 className="text-4xl font-semibold text-purple-700">Our Mission</h2>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          Our mission is to provide high-quality medical services to ensure
          the well-being of our patients. We strive for excellence in patient
          care, innovation, and a compassionate approach to healthcare.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold text-purple-700 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-gray-800">Experienced Doctors</h3>
            <p className="text-gray-600 mt-2">
              Our medical team consists of top specialists with years of experience.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-gray-800">24/7 Emergency Care</h3>
            <p className="text-gray-600 mt-2">
              We are always available to provide immediate medical attention.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-gray-800">Advanced Technology</h3>
            <p className="text-gray-600 mt-2">
              We utilize state-of-the-art medical equipment for precise diagnosis.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Doctors Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold text-purple-700 text-center">Meet Our Doctors</h2>
        <div className="flex  justify-center gap-6 mt-8">
          {/* Doctor Cards */}
          {[ 
            { image: doc, name: "Dr. Emily Johnson", specialty: "Cardiologist", description: "Highly experienced in heart diseases and patient care." },
            { image: nurse, name: "Dr. James Anderson", specialty: "Neurosurgeon", description: "Expert in brain surgeries and neurological disorders." },
            { image: doct, name: "Dr. Sophia Williams", specialty: "Pediatrician", description: "Dedicated to children's health and wellness." },
            { image: nurse, name: "Dr. William Brown", specialty: "Orthopedic Surgeon", description: "Specializing in joint replacement and sports injuries." }
          ].map((doctor, index) => (
            
            <Card key={index} sx={{ maxWidth: 345 }} className="hover:scale-105 hover:shadow-lg transition-all">
              <CardMedia sx={{ height: 330 }} image={doctor.image} title={doctor.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {doctor.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Patient Testimonials Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-semibold text-purple-700 text-center">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <p className="text-gray-600">
              "The doctors here are amazing! They provided excellent care and made me feel at ease."
            </p>
            <h3 className="text-lg font-semibold text-purple-700 mt-4">- Sarah M.</h3>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <p className="text-gray-600">
              "Quick response and professional service. I highly recommend this hospital!"
            </p>
            <h3 className="text-lg font-semibold text-purple-700 mt-4">- David P.</h3>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <p className="text-gray-600">
              "Best medical facility I've ever visited. They truly care about their patients."
            </p>
            <h3 className="text-lg font-semibold text-purple-700 mt-4">- Michael R.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
