import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function ProductsScreen (props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const productSave = useSelector(state => state.productSave);
  const { loading, loadingSave, success: successSave, error: errorSave }= productSave;
  const dispatch = useDispatch();

  useEffect(() => {

    return () => {}
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct(name, price));
  }
  return <div className="form">
    <form onSubmit={submitHandler}>
      <ul className="form-container">
        <li>
          <h2>Create Product</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Sign In</button>
        </li>
        <li>
          New to Amazon?
        </li>
        <li>
          <Link to="/register" className="button secondary text-center">Create your Amazon account</Link>
        </li>
      </ul>
    </form>
  </div>

}
export default SigninScreen
