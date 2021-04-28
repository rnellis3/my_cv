import React from 'react'

class Experience extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className='container'>
                <form className='formGrid'>
                <label>Work Experience
                <br />
                <input
                name='firstName'
                placeholder='first name'
                type='text' />
                </label>

                <label>Duties
                <br />
                <textarea />
                {/* <input
                name='lastName'
                placeholder='last name'
                type='textarea' /> */}
                </label>

                <label>Work Experience
                <br />
                <input
                name='street'
                placeholder='street'
                type='text' />
                </label>

                <label>Duties
                <br />
                <textarea />
                {/* <input
                name='city'
                placeholder='city'
                type='text' /> */}
                </label>

                <label>Work Experience
                <br />
                <input
                name='state'
                placeholder='state'
                type='text' />
                </label>

                <label>Duties
                <br />
                <textarea />
                {/* <input
                name='zip'
                placeholder='zip'
                type='text' /> */}
                </label>

                </form>
                <br />
                <hr />
            </div>
        );
      }
}

export default Experience