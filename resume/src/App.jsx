// Updated App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const projects = [
    {
      title: "Automated Irrigation System",
      description: "Designed an Arduino-based smart irrigation solution that reduced water wastage by 25% through precise soil moisture detection and pump automation. Simulated the system in TinkerCAD, highlighting skills in circuit design and hardware-software integration.",
      image: "#",
    },
    {
      title: "IoT-Based Pulse Monitor",
      description: "Developed an IoT-enabled pulse monitoring device using Arduino Uno, integrating a pulse sensor for real-time heart rate tracking. Enhanced expertise in sensor integration, data transmission, and IoT-based design.",
      image: "#",
    },
    {
      title: "Electric Vehicle Design",
      description: "Contributed to the Women’s Electric Vehicle Club by designing the chassis for a sustainable EV prototype. Collaborated with cross-functional teams to ensure efficiency and safety in the vehicle's design.",
      image: "#",
    },
  ];

  const handleProfilePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const photoUrl = URL.createObjectURL(file);
      setProfilePhoto(photoUrl);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#cover">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="cover" id="cover">
        {profilePhoto ? (
          <img src={profilePhoto} alt="Profile" className="profile-photo-large" />
        ) : (
          <div className="upload-prompt">
            <label htmlFor="profile-photo-upload" className="upload-button">
              Upload Profile Photo
            </label>
            <input
              type="file"
              id="profile-photo-upload"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              style={{ display: "none" }}
            />
          </div>
        )}
        <div className="cover-content">
          <h1>MEENALOSHINI</h1>
          <h2>Undergraduate Student</h2>
          <p>
            Enthusiastic ECE undergraduate at SKCET with a passion for embedded systems, circuit design, and automotive electronics. Skilled in programming, microcontrollers, and hardware-software integration, eager to contribute to innovative projects and gain industry experience.
          </p>
        </div>
      </header>

      <main>
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            I am a professional ECE undergraduate with skills in embedded systems, circuit design, and automotive electronics. Passionate about learning, innovating, and collaborating to bring technical concepts to life.
          </p>
        </section>

        <section className="projects" id="projects">
          <h2>Portfolio</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact Me</h2>
          <p><strong>Phone:</strong> +91 7010900295</p>
          <p><strong>Email:</strong> meenaloshinisingaravelu07@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/meenaloshinisingaravelu-992586290" target="_blank">linkedin.com/in/meenaloshinisingaravelu</a></p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MEENALOSHINI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;