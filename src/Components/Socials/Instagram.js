import './Socials.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title">Instagram</h3>
              <p style={{fontSize: '24px', color:'white'}}className="card-text">Techcore is a nonprofit that strives to reduce the digital divide in education. We know that many schools don't have enough funds to purchase computers and that's why we want to help. To learn more visit     <a href="/about" style={{ textDecoration: 'underline', color: 'white' }}>about us</a>
 </p>      
      </div>
    </div>
  );
}

export default TextExample;