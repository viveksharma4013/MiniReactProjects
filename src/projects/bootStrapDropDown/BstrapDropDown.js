import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './BstrapDropDown.css'

function BstrapDropDown() {
  return (
    <DropdownButton id="dropdown-item-button"className='bstrap-dropdwn' title="Dropdown button">
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>  */}
      <Dropdown.Item as="button">Clock</Dropdown.Item>
      <Dropdown.Item as="button">Quiz App</Dropdown.Item>
      <Dropdown.Item as="button">Recipe App</Dropdown.Item>
      <Dropdown.Item as="button">Notes App</Dropdown.Item>
      <Dropdown.Item as="button">Recipe App</Dropdown.Item>
      <Dropdown.Item as="button">ToDo App</Dropdown.Item>
      <Dropdown.Item as="button">Movies App</Dropdown.Item>
      <Dropdown.Item as="button">GitHub Profiles</Dropdown.Item>
      <Dropdown.Item as="button">Drawing App</Dropdown.Item>
      <Dropdown.Item as="button">Password Generator</Dropdown.Item>
      <Dropdown.Item as="button">Weather App</Dropdown.Item>
      <Dropdown.Item as="button">Analytics</Dropdown.Item>
    </DropdownButton>
  )
}

export default BstrapDropDown;
