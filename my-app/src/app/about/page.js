import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Your Company Name</title>
        <meta name="description" content="Learn more about us and what we do." />
        <meta name="keywords" content="about, E-Commerce, information" />
        <meta name="author" content="Your Company Name" />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <Image
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5HX85I2zLsXYSSruC8670C/93ccb22b55d7638fc4109b118a7fd630/GettyImages-1313131428.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000" // Replace with your image path
          alt="About Us Image"
          width={600} // Set width as needed
          height={400} // Set height as needed
          className="mb-4 rounded-lg" // Example Tailwind CSS class
        />
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate about our mission and values. 
        </p>
        <p className="text-lg text-gray-700">
          Our goal is to connect with our customers and make their experience enjoyable and memorable. 
        </p>
      </div>
    </>
  );
}
