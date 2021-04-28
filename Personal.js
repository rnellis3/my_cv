import React from 'react'

class Personal extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            email: '',
            phone: ''
        }
    }

    render() {
        return (
            <div className='container'>
                <form className='formGrid'>
                <label>First Name
                <br />
                <input
                name='firstName'
                placeholder='first name'
                type='text' />
                </label>

                <label>Last Name
                <br />
                <input
                name='lastName'
                placeholder='last name'
                type='text' />
                </label>

                <label>Street Address
                <br />
                <input
                name='street'
                placeholder='street'
                type='text' />
                </label>

                <label>City
                <br />
                <input
                name='city'
                placeholder='city'
                type='text' />
                </label>

                <label>State
                <br />
                <input
                name='state'
                placeholder='state'
                type='text' />
                </label>

                <label>Zip Code
                <br />
                <input
                name='zip'
                placeholder='zip'
                type='text' />
                </label>

                <label>Email Address
                <br />
                <input
                name='email'
                placeholder='email'
                type='text' />
                </label>

                <label>Phone Number
                <br />
                <input
                name='phone'
                placeholder='phone'
                type='text' />
                </label>
                </form>
                <br />
                <hr />
            </div>
        );
      }
}

export default Personal