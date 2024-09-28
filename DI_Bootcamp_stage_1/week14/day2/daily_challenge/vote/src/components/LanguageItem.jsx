const LanguageItem = ({ language, onVote }) => {
    return (
      <div className="language-item">
        <h2>{language.name}</h2>
        <p>Votes: {language.votes}</p>
        <button onClick={() => onVote(language.name)}>Vote</button>
      </div>
    );
  };
  
  export default LanguageItem;
  