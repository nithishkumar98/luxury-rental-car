import { AutoComplete } from 'antd';
import React,{useState} from 'react';

const CustomAutoComplete = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState('');
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setSuggestions(suggestions.filter((suggestion) => suggestion.includes(value)));
    };
  
    const handleSelect = (suggestion) => {
      setSelectedSuggestion(suggestion);
    };
  
    return (
      <div>
        <AutoComplete
          options={suggestions}
          value={selectedSuggestion}
          onChange={handleInputChange}
          onSelect={handleSelect}
        />
      </div>
    );
  };
  
  export default CustomAutoComplete;