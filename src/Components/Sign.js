import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title" style={{fontFamily: 'Roboto Flex'}}>Sign up</h3>
              <p style={{fontSize: '24px', fontFamily: 'oxygen', color: 'white'}}className="card-text"> If you are currently in grades 5-8 please fill out this <a style={{ textDecoration: 'underline', color: 'white' }} href='https://forms.gle/ZU8DcW3J3ES9swsv9'>interest form </a> so we can get a idea on what classes to teach & after that we will be sending out registration link to register in about 2-3 weeks </p>
              <p style={{fontSize: '24px', fontFamily: 'oxygen', color: 'white'}}className="card-text"> If you are currently in Highschool and would like to earn volunteer hours by teaching these classes 1 hour class twice per week please sign up <a style={{ textDecoration: 'underline', color: 'white' }} href='https://forms.gle/MSddFo2Qduxrk9Tr8'>here</a> </p>         
      </div>
    </div>
  );
}

export default TextExample;