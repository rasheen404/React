import Profile from './assets/Profile.jpg'

function Card()
{
    return(
   <div className='card'>
<img className='card-image' src={Profile} alt="Profile photo" ></img>
<h2 className='card-title'>Anonymous</h2>
<p className='card-text'>I am a Passionate Full Stack Software Engineer who is Recently Graduated B-Tech</p>
   </div>

    );
}

export default Card