import React from 'react';

const AuthForm = (props) => {
    const { handleSubmit, handleChange, username, password, buttonText } = props
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                name='username'
                onChange={handleChange}
                value={username}
                placeholder='Username'
                required
            />
            <input
                type='password'
                name='password'
                onChange={handleChange}
                value={password}
                placeholder="Password"
                required
            />
            <button>{buttonText}</button>
        </form>
    );
};

export default AuthForm;