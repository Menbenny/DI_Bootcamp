import LanguageItem from './LanguageItem';

const LanguageList = ({ languages, onVote }) => {
  return (
    <div>
      {languages.map((language) => (
        <LanguageItem
          key={language.name}
          language={language}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default LanguageList;
