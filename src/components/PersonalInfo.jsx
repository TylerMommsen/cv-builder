import '../styles/section.css'

const PersonalInfo = () => {
  return (
    <div className='section'>
          <h2 className='section-title'>Personal Information</h2>
          <form>
              <label>
                  <p className='label-text'>Full Name</p>
                  <input type='text'></input>
              </label>
              <label>
                <p className='label-text'>Email</p>
                  <input type='email'></input>
              </label>
              <label>
                <p className='label-text'>Phone Number</p>
                  <input type='number'></input>
              </label>
              <label>
                <p className='label-text'>Address</p>
                  <input type='text'></input>
              </label>
          </form>
    </div>
  )
}

export default PersonalInfo