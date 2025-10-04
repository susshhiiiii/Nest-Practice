import React from "react";

async function ContactPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>ContactPage</div>;
}

export default ContactPage;
