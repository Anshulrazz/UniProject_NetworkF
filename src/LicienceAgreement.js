import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LicenseAgreement = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">License Agreement for UniProject Network</h2>

      <p><strong>Effective Date:</strong> 19/09/2024</p>

      <h4>1. License Grant</h4>
      <p>
        By accessing or using UniProject Network ("the Website" or "Service"), you are granted a limited, non-exclusive, non-transferable, revocable license to use the Service in accordance with this License Agreement and the Terms of Service. This license does not include the right to:
      </p>
      <ul>
        <li>Modify, distribute, or create derivative works based on the Website or its content without prior written permission.</li>
        <li>Use the Website for any illegal or unauthorized purpose.</li>
      </ul>

      <h4>2. Ownership</h4>
      <p>
        All rights, title, and interest in and to the Service, including all associated intellectual property rights, remain with UniProject Network and <a href="https://vermaji.onrender.com" style={{textDecoration:"none"}}>Anshul Kumar</a>. You are granted no ownership rights in the Service, and this License does not convey any ownership rights.
      </p>

      <h4>3. Restrictions</h4>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, distribute, transmit, display, or perform any content from the Website without prior written permission.</li>
        <li>Attempt to reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying structure of the Service.</li>
        <li>Use the Website or its content to infringe on the intellectual property rights of others.</li>
      </ul>

      <h4>4. Open-Source Components (APIs)</h4>
      <p>
        Some portions of the Service may include open-source software components provided under separate license terms. You agree to comply with the specific license terms applicable to those components, which may be provided in the open-source license notice.
      </p>

      <h4>5. Updates and Modifications</h4>
      <p>
        UniProject Network reserves the right to modify or discontinue the Service (or any part of it) with or without notice. Any updates to the Service may also be governed by this License Agreement.
      </p>

      <h4>6. Termination</h4>
      <p>
        This License will automatically terminate if you violate any terms of this Agreement. Upon termination, you must cease all use of the Service and destroy any copies of materials obtained from the Website.
      </p>

      <h4>7. No Warranties</h4>
      <p>
        The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. UniProject Network disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h4>8. Limitation of Liability</h4>
      <p>
        Under no circumstances shall UniProject Network, its licensors, or affiliates be liable for any indirect, incidental, consequential, or punitive damages arising out of the use or inability to use the Service, even if advised of the possibility of such damages.
      </p>

      <h4>9. Governing Law</h4>
      <p>
        This License Agreement will be governed by and construed in accordance with the laws of copyright. Any disputes arising under this License will be resolved in accordance with the applicable laws of this jurisdiction.
      </p>

      <h4>10. Contact Information</h4>
      <p>
        If you have any questions about this License Agreement, you may contact us at <a style={{ textDecoration: 'none' }} href="mailto:uniprojectsnetwork@gmail.com">uniprojectsnetwork@gmail.com</a>.
      </p>

      <h5 className="mt-5">Optional License Considerations:</h5>
      <ul>
        <li><strong>MIT License:</strong> If you are considering making part of your project open-source, the MIT License is a permissive license that allows users to freely use, copy, and modify the software.</li>
        <li><strong>GPL License:</strong> If you want to require that any modifications to your code must also be made available under the same terms, the GPL may be suitable.</li>
        <li><strong>Creative Commons License:</strong> If you plan to allow users to share or remix content from the website under certain conditions, you may consider using a Creative Commons License.</li>
      </ul>
    </div>
  );
};

export default LicenseAgreement;