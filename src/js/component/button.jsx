import React, {useState} from "react";

let Button = () => {

    const [word, setWord] = useState('');

    const handleSubmit = (e) => {
		if (e.key === "Enter" && word != "") {
			setWord(word);
			setWord('');
		}
	}

    return (
        <div>
            <input 
                className="w-100 ps-3"
                type="text"
                placeholder="Enter a task"
                value={word}
                onChange={(e) => {
                    setWord(e.target.value);
                    console.log(word);
                }}
                onKeyDown={handleSubmit}
            />
        </div>
        
    );
};

export default Button;