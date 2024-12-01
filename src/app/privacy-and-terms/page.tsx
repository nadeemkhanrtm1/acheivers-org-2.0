import React from 'react';

const page = () => {
  return (
    <section>
      <h1 className='mt-6 mb-2'>Welcome to Our Privacy and Terms Page</h1>
      <p className='text-sm leading-6'>
        We value your privacy and are committed to protecting your personal
        information. This page outlines our privacy practices and the terms of
        use for our app. Please read through these sections to understand how we
        handle your data and what your rights are as a user.
      </p>

      <h2 className='mt-6 mb-2'>Privacy Policy</h2>
      <p className='text-sm leading-6'>
        We collect various types of information to provide and improve our
        services. This includes personal data such as your name, email address,
        and phone number, as well as usage data like your IP address, browser
        type, and activity on our app.
      </p>
      <h2 className='mt-6 mb-2'>How We Use Your Information</h2>
      <p className='text-sm leading-6'>
        Your data is used to enhance your experience with our app. We use it for
        purposes such as personalizing content, improving our services,
        conducting analytics, and communicating with you about updates or
        promotions.
      </p>
      <h2 className='mt-6 mb-2'>Data Security</h2>
      <p className='text-sm leading-6'>
        We implement a variety of security measures to ensure the safety of your
        personal information. This includes encryption, secure servers, and
        regular security audits to protect against unauthorized access,
        alteration, or destruction of your data.
      </p>
      <h2 className='mt-6 mb-2'>Data Sharing</h2>
      <p className='text-sm leading-6'>
        We may share your data with third-party partners to help us provide and
        improve our services. These partners are required to adhere to strict
        data protection standards. We do not sell your personal information to
        third parties.
      </p>
      <h2 className='mt-6 mb-2'>User Rights</h2>
      <p className='text-sm leading-6'>
        You have the right to access, correct, or delete your personal data. You
        can also object to or restrict certain processing of your data. To
        exercise these rights, please contact our support team through the
        provided contact form.
      </p>
    </section>
  );
};

export default page;
