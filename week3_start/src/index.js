import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import RecipeManager from './RecipeManager';
import reportWebVitals from './reportWebVitals';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import {recipe} from './Common';
import {toggleVisibility} from './Common';
import PreperationSteps from './PreperationSteps';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RecipeManager />
    
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.slyhkitchen.com/wp-content/uploads/2014/10/Mashed-Potatoes.jpg" />
      <Card.Body>
        <Card.Title>
          <RecipeTitle title={recipe.title} feedback={recipe.feedback}/> 
        </Card.Title>
        <Card.Text>
          Some delicious mashed potatoes, unfortunately without any cheese
        </Card.Text>
        <Button variant="primary" onClick={toggleVisibility}>Show Details</Button>
      </Card.Body>
    </Card>

    <div id="myModal" className="modal"style={{ display: 'hide', position: 'fixed' }}>
      <Modal.Dialog>
      <Modal.Header onClick={toggleVisibility} closeButton>
            <Modal.Title>{recipe.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <IngredientList ingredients={recipe.ingredients}/>
            <PreperationSteps steps={recipe.steps}/>
          </Modal.Body>

      </Modal.Dialog>
    </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
