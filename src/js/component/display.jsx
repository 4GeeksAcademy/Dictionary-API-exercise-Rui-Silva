import React, {useState, useEffect} from "react";

const Display = () => {

    const [wordList, setWordList] = useState([]);
	const [word, setWord] = useState('');

	useEffect(() => {
		fetchWords();
	}, []);

    const handleChange = (e) => {
        setWord(e.target.value);
      };

	// const click = () => {
	// 	setWord(word)
	// }

    const handleSubmit = (e) => {
		if (e.key === "Enter" && word != "") {
			setWord('');
			console.log(word);
		}
	}

	const fetchWords = () => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/imagine`)
		.then(response => {
			if(!response.ok) throw Error(response);
			else return response.json()
		})
		.then(result => {
			console.log(result);
			setWordList(result);
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div>
			<div className="row justify-content-center pt-2 pb-2">
				<div class="col-6">
					<input 
						class="form-control" 
						type="text" 
						placeholder="search for a word" 
						value={word}
						onChange={handleChange}
						onKeyDown={handleSubmit}
					></input>
				</div>
				
			</div>
			
            {/* <button onClick={click}>enter</button> */}
			<div>
				{wordList.map((word) => {
					return (
						<div div className="row align-items-center justify-content-center">
							<div class="col text-center mt-2">
								<h3>{word.word}
									<span class="text-muted fs-6"> - {word.phonetic}</span>
								</h3>
							</div>
							<div >
								<p className="fw-lighter m-4">{word.meanings[1].definitions[0].definition}</p>
							</div>
							<a href={word.sourceUrls} class="link-info mb-3" target="_blank">More detailed information</a>
							<a href={word.phonetics[0].audio} class="link-info" target="_blank"><i class="fas fa-volume-up"></i></a>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default Display;