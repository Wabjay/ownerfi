import React, { useState } from "react";
import Faq from "../components/Faq/Faq";
import { HeadProvider as Head } from "react-head";
import PlacesAutocomplete, {
geocodeByAddress, getLatLng
} from "react-places-autocomplete"
import Content from "../components/Content/Content";
import { Link, useNavigate } from "react-router-dom";
// import Form from "./Form";

const Home = () => {
  const [address, setAddress] = useState("")
  const [cordinate, setCordinate] = useState({
    lat: null,
    lng: null
  })

  const navigate = useNavigate();


  const handleSelect = async (value) =>{
    const result  = await geocodeByAddress(value);
    setAddress(value)
    const latLng  = await getLatLng(result[0]);
    setCordinate(latLng)
  }
  console.log(cordinate)
  console.log(address)

  return (
    <div className="container">
      <Head title = "Ownerfi" />
      <div className="banner">
        <div className="banner_content">
          <p className="bold_text">A passive income solution for landlords.</p>
          <p className="small_text">Sell your rental while you continue to earn true passive income while being free of the stress of being a landlord. </p>
          
          <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} className="search">
            {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>
              <div className="search_box">
              <div className='suggestions_body'>             
              <input
              {...getInputProps({
                placeholder: 'Enter your rental property address ...',
                className: 'location-search-input',
              })}
            />         
              <div>
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                // const style = suggestion.active
                //   ? { backgroundColor: '#fafafa', cursor: 'pointer',  color: 'var(--grey-800)', padding: '0 16px' }
                //   : { backgroundColor: '#ffffff', cursor: 'pointer', color: 'var(--grey-600)', padding: '0 16px' };
                return (
                  <div                  
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      // style,
                      key: suggestion.id
                    })}
                  >
                   
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
              </div>
                </div>
                  <button className="btn search_btn" onClick={()=> navigate('/form', {state: { address: address}})}>
                    Recieve my offer{loading && <span>...</span>}</button>
              </div>
            }
          </PlacesAutocomplete>
          
        </div>
      </div>
      <Content />
      <div className="faq_container">
      <div className="faq_text">
        <p >Frequently asked questions</p>
        <Link href="/faq">
            <button className="faq_btn">
            Go to FAQ</button>
            </Link>
      </div>
      <Faq />
    </div>
    </div>
  );
};

export default Home;