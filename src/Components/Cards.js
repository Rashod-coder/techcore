import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#D7E3F4' }}>
            <div className="card-body">
              <h3 className="card-title">What is Techcore?</h3>
              <p style={{fontSize: '24px'}}className="card-text">Techcore is a nonprofit that strives to reduce the digital divide in education. We know that many schools don't have enough funds to purchase computers and that's why we want to help. To learn more visit <a href='/about'>about us</a> </p>      
      </div>
    </div>
  );
}

export default TextExample;