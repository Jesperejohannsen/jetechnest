import "./RecommendedBooks.css";
import PragmaticProgrammerImage from "../../assets/pragmaticProgrammer.jpg";
import CleanCodeImage from "../../assets/cleanCode.jpg";
import CleanArchitectureImage from "../../assets/cleanArchitecture.jpg";
import ModernSoftwareEngineering from "../../assets/modernSoftwareEngineering.jpg";
import UMLBook from "../../assets/UMLBook.jpg";
import GradiantHeader from "../gradiantHeader/GradiantHeader";

interface Book {
  title: string;
  imageUrl: string;
  link: string;
}

const books: Book[] = [
  {
    title: "The Pragmatic Programmer",
    imageUrl: PragmaticProgrammerImage,
    link: "https://pragprog.com/",
  },
  {
    title: "Clean Code",
    imageUrl: CleanCodeImage,
    link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
  },
  {
    title: "Clean Architecture",
    imageUrl: CleanArchitectureImage,
    link: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
  },
  {
    title: "Modern Software Engineering",
    imageUrl: ModernSoftwareEngineering,
    link: "https://www.amazon.com/Modern-Software-Engineering-Discipline-Development/dp/0137314914",
  },
  {
    title: "Applying UML and Patterns",
    imageUrl: UMLBook,
    link: "https://www.amazon.com/Applying-UML-Patterns-Introduction-Object-Oriented/dp/0131489062",
  },
];

const RecommendedBooks = () => {
  return (
    <>
      <div className="headerSectionBookSelection">
        <GradiantHeader h3="Here are some books that I recommend within the world of software." />
      </div>
      <div className="recommended-books">
        {books.map((book, index) => (
          <div key={index} className="book">
            <img src={book.imageUrl} alt={book.title} />
            <a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedBooks;
