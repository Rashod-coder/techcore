import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
            <h3 className="card-title" style={{fontFamily: 'Roboto Flex', color: 'black', fontSize: '30px'}}>Courses - Python</h3>
            <h3 style={{fontSize: '20px', color: 'white', fontFamily: 'oxygen'}}>Techcore is currently teaching Introduction to Python to grades 5-9, incoming 5th graders & incoming 9th graders are allowed to register for this course. </h3>
            <br></br>
            <h3 style={{fontSize: '20px', color: 'white', fontFamily: 'oxygen'}}>This is a great course for developing a new hobby, learning something new, & this skill can possibly allow you to gain a feel of Computer Science. Maybe it may be something you end up pursuing in the future give it a try!.</h3>
           <br></br>
            <h3 style={{fontSize: '20px', color: 'white', fontFamily: 'oxygen'}}> Try it out today, sign up on google form attached on this page.</h3>
      </div>
    </div>
  );
}

export default TextExample;