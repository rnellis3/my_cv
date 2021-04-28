import React from 'react'

class Education extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className='container'>
                <form className='formGrid'>
                <label>Degree
                <br />
                <input
                name='firstName'
                placeholder='first name'
                type='text' />
                </label>

                <label>Certifications
                <br />
                <input
                name='lastName'
                placeholder='last name'
                type='text' />
                </label>

                <label>Years attended
                <br />
                <input
                name='street'
                placeholder='street'
                type='text' />
                </label>


                </form>
                <br />
                <hr />
            </div>
        );
      }
}

export default Education