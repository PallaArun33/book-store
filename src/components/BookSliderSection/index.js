import {Component} from "react"
import Slider from "react-slick"
 
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookItem from "../BookItem"
import './index.css'
 

const BooksList = [
  {
    id:"410d6144e8e009357d3394af44585a0c",
    name: "Harry Potter and the Philosopher's Stone",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/7/i/a/harry-potter-and-the-philosophers-stone-original-imagzj8nzznkhcyx.jpeg?q=90&crop=false",
      description:"Harry Potter and the Philosopher's Stone is the first novel in J.K. Rowling's iconic fantasy series. It follows the young wizard Harry Potter as he discovers his magical abilities, attends Hogwarts School of Witchcraft and Wizardry, and confronts the dark forces that threaten the wizarding world, with a central focus on the quest for the titular Philosopher's Stone.",
     

  },
  {
    id: "7f0f681b7f000521bcc5e70270f8a155",
    name: "Harry Potter y el caliz de fuego",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB_eABKuCPgwDIckMh-qKmBCMfeG8lLxeQQ&usqp=CAU",
      description:
       "Harry Potter y el Cáliz de Fuego is the Spanish edition of J.K. Rowling's fourth book, Harry Potter and the Goblet of Fire. In this installment, Harry competes in the Triwizard Tournament, a dangerous magical competition, while uncovering dark secrets and facing the resurgence of the dark wizard Voldemort. The novel explores themes of friendship, loyalty, and the growing threat of darkness in the wizarding world.",
     
  },
  {
    id: "62747a60236630ee9a6fcce25fc1affb",
    name: "Harry Potter og de vises sten",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmC4maH18jnq7T6yD1hkQytYmZmUPLXoUEg&usqp=CAU",
    description:
      "Harry Potter og de vises sten is the Danish edition of J.K. Rowling's first book, Harry Potter and the Philosopher's Stone. It introduces readers to the magical world of Harry Potter as he embarks on his journey at Hogwarts School of Witchcraft and Wizardry, unraveling mysteries, forging friendships, and facing the challenges that lie ahead. The novel captures the essence of Rowling's captivating storytelling and the enchanting universe of wizards and magical creatures.",
      
  },
  {
    id: "7592ff85f4b7fbdaf45dc276ed1fa08f",
    name: "Harry Potter y la camara secreta",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XTpnVtLuGU9YIiqD94zPn9jig6dC9dyEHxKWLDXW0pFAKXJ0SDHQ18GP8CSCX02dxew&usqp=CAU",
    description:
      "Harry Potter y la Cámara Secreta is the Spanish edition of J.K. Rowling's second book, Harry Potter and the Chamber of Secrets. In this installment, Harry returns to Hogwarts to discover mysterious occurrences, including students being petrified. As he delves into the chamber's secrets, he confronts dark magic, a malevolent diary, and a new threat connected to the school's history.",
      
  },
  {
    id: "61a7fd7b0f4f411d2d5f38d9e3a77059",
    name: "Unofficial Guide to Harry Potter",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6I8vH9-wZ6TbsIWnfQQtRPBHCWQCDbElE4g&usqp=CAU",
    description:
      "The Unofficial Guide to Harry Potter is a fan-generated companion book that provides in-depth insights, analyses, and additional information about the beloved Harry Potter series by J.K. Rowling. Offering behind-the-scenes details, character analyses, and trivia, this guide serves as a comprehensive resource for fans seeking a deeper understanding of the magical world and its intricacies.",
       
  },
  {
    id: "58e1ea13c4e92764df36a118dc508d6e",
    name: "Harry Potter und der Feuerkelch Bd 4",
    imageUrl:
      "https://i.weltbild.de/p/harry-potter-und-der-feuerkelch-harry-potter-bd-4-072344921.jpg?v=3&wp=_ads-minzoom2",
      description:
      "Harry Potter und der Feuerkelch is the German edition of J.K. Rowling's fourth book, Harry Potter and the Goblet of Fire. In this installment, Harry finds himself unexpectedly entered into the Triwizard Tournament, a dangerous magical competition. As he faces new challenges and uncovers dark mysteries, the story unfolds with elements of suspense, adventure, and the growing threat of the dark wizard Voldemort in the wizarding world.",
       
  },
  {
    id: "f06e9d74b7d671c3ff1393c83abf42d2",
    name: "Harry Potter y la Orden del Fenix",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG08aWZ0CUw1hgoGkG1lbBZB5SW0OUlsZ3w&usqp=CAU",
    description:
      "Harry Potter y la Orden del Fénix is the Spanish edition of J.K. Rowling's fifth book, Harry Potter and the Order of the Phoenix. In this installment, Harry faces increasing threats from the dark wizard Voldemort while dealing with challenges at Hogwarts, including the formation of Dumbledore's secret society, the Order of the Phoenix. The novel explores themes of resistance, friendship, and the complexities of adolescence in the wizarding world.",
      
  },
  {
    id: "c605a2f4bfcdba5ec84f0d9b0bb1e39f",
    name: "Harry Potter s a Blcsek Kve",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuO8LioNm9k-v1AxAslNEWqV33ii_VQMAXpw&usqp=CAU",
    description:
      "Harry Potter és a Bölcsek Köve is the Hungarian edition of J.K. Rowling's first book, Harry Potter and the Philosopher's Stone. It introduces readers to the magical journey of Harry Potter as he discovers his wizarding abilities, attends Hogwarts School of Witchcraft and Wizardry, and unravels the mysteries surrounding the Philosopher's Stone. The novel captures the enchanting world of magic, friendship, and adventure that has made the Harry Potter series a global phenomenon.",
       
  },
  {
    id: "ebab27fa9ba01edd805e18fdd00c6232",
    name: "Harry Potter s a Blcsek Kve",
    imageUrl:
      "https://i.pinimg.com/originals/7e/c2/b5/7ec2b5f274b6f51bad6eb7d03da8e41e.jpg",
    description:
      "Harry Potter és a Bölcsek Köve is the Hungarian edition of J.K. Rowling's first book, Harry Potter and the Philosopher's Stone. It follows the young wizard Harry Potter as he discovers his magical abilities, attends Hogwarts School of Witchcraft and Wizardry, and confronts the dark forces that threaten the wizarding world in his quest for the Philosopher's Stone.",
       
  },
  {
    id:  "c26d3c431a501c9cd61173522e3f681d",
    name: "Harry Potter s a Titkok Kamrja",
    imageUrl:
      "https://media.gettyimages.com/id/75579312/photo/a-pakistani-youth-reads-a-copy-of-harry-potter-and-the-deathly-hallows-at-a-bookstore-in.jpg?s=612x612&w=gi&k=20&c=gdfgGG2hBD1fCoon5vb9Xc_dwosOBE_412B8BMNWjFI=",
    description:
      "Harry Potter és a Titkok Kamrája is the Hungarian edition of J.K. Rowling's second book, Harry Potter and the Chamber of Secrets. In this installment, Harry returns to Hogwarts to uncover the mystery behind the Chamber of Secrets, facing dark forces and a series of petrifying attacks on students. The novel delves deeper into the magical world, exploring the secrets hidden within the school's corridors and the unfolding dangers that threaten the wizarding community.",
      
  }
   

]

class BookSliderSection extends Component {
  render(){
    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return(
       
       
    <div className="books-app-container" data-testid="books">
      <h1 className="heading">There Is No Friend As Loyal As A Book</h1>
      <Slider {...settings}>
        {BooksList.map(eachBook => (
          <BookItem key={eachBook.id} bookDetails={eachBook} />
        ))}
      </Slider>
    </div>

  
    )
  }}
    
export default BookSliderSection