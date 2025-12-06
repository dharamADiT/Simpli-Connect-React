import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-10 py-10 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        About SimpliConnect
      </h1>

      <p className="mb-5 text-lg">
        <strong>SimpliConnect</strong> was created with a mission to make banking simple,
        understandable, and accessible for everyone — especially those who face
        difficulties in finding reliable financial guidance.
      </p>

      <p className="mb-5 text-lg">
        Many people — whether students beginning their financial journey,
        employees managing their earnings, or entrepreneurs planning growth —
        face one common question:
        <span className="font-semibold block mt-1 text-blue-300">
          “Which bank is best for me?”
        </span>
      </p>

      <p className="mb-5 text-lg">
        Finding the answer isn’t easy. Banking websites can be complicated, and
        comparing information takes time. This is where <strong>SimpliConnect</strong> helps.
      </p>

      <p className="mb-8 text-lg">
        Developed by <strong>Dharam</strong>, a passionate Frontend Developer dedicated to solving
        real-world problems through technology, SimpliConnect bridges the gap
        between users and banking information. The idea came after noticing how
        many people struggle with financial decisions due to unclear or
        scattered information.
      </p>

     
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
       What We Stand For
      </h2>

      <ul className="list-disc ml-6 space-y-3 text-lg">
        <li>
          <strong>Simplicity:</strong> Banking details shown in a clean and understandable way.
        </li>
        <li>
          <strong>Transparency:</strong> Honest comparisons without confusion.
        </li>
        <li>
          <strong>Guidance:</strong> Helping students, employees, and entrepreneurs make
          smoother decisions.
        </li>
        <li>
          <strong>Accessibility:</strong> Easy-to-understand banking information for everyone.
        </li>
      </ul>

      {/* Mission */}
      <h2 className="text-2xl md:text-3xl font-semibold  mt-10 mb-4">
        Our Mission
      </h2>
      <p className="text-lg mb-6">
        To empower people with the knowledge they need to make smart, confident,
        and stress-free financial decisions.
      </p>

      {/* Goal */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      Our Goal
      </h2>
      <p className="text-lg mb-6">
        To become a trusted platform where users can explore multiple banks,
        compare benefits, and choose what’s best for their future — all in just
        a few clicks.
      </p>

      {/* Future Enhancements */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
       Future Enhancements
      </h2>

      <ul className="list-disc ml-6 space-y-3 text-lg">
        <li>More partnered banks</li>
        <li>Advanced comparison tools</li>
        <li>AI-based financial guidance</li>
        <li>User dashboards</li>
        <li>Personalized recommendations</li>
        <li>Real-time updates of schemes and offers</li>
      </ul>

      <p className="text-lg mt-8">
        <strong>SimpliConnect</strong> is built with care and purpose — to provide clarity,
        confidence, and convenience to every user. We believe financial decisions
        shouldn’t be guesswork; they should be informed, clear, and empowering.
      </p>
      {/* About the Developer */}
<h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
  About the Developer
</h2>

<p className="text-lg mb-5">
  Hi, I'm <strong>Dharam Baghel</strong>, a passionate Web Developer who believes that
  technology should make people’s lives easier. I created SimpliConnect after
  noticing how many people — especially students and working individuals — feel
  confused while choosing the right bank or understanding financial services.
</p>

<p className="text-lg mb-5">
  With a strong interest in building clean, user-friendly, and meaningful
  digital solutions, my goal is to simplify banking information and make it
  accessible to everyone. I am committed to improving this platform with modern
  features, better comparisons, and smarter guidance tools.
</p>

<p className="text-lg">
  Thank you for using SimpliConnect — your trust motivates me to build better
  and smarter tools for the future.
</p>

    </div>
  );
};

export default About;
