import { Dna } from "react-loader-spinner";
import { TopButton } from "../../components/TopButton/TopButton";
import { UserInfo } from "../../components/userInfo/UserInfo";
import "./books.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

export const Books = () => {
	const [booksData, setBooksData] = useState([]);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/books")
			.then((res) => setBooksData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{booksData?.length !== 0 ? (
				<div className='books-info-wrap'>
					<ul className='books-list'>
						{booksData.map((item) => (
							<li className='books-item'>
								<div>
									<h3 className="books-title">{item.title}</h3>
									<p className="books-descr">{item.text}</p>
									<strong className='books-author'>
										Muallif:{" "}
										<span className='books-author-name'>{item.author}</span>
									</strong>
								</div>
								<a href='/' download={item.file}>
									<Button variant='contained' className='books-download-btn'>
										Yuklab olish
										<FaDownload
											style={{ marginLeft: "10px", marginTop: "-3px" }}
										/>
									</Button>
								</a>
							</li>
						))}
					</ul>
					<div className="author-wrap">
						<UserInfo />
						<TopButton />
					</div>
				</div>
			) : (
				<div className='progress-wrap'>
					<Dna
						visible={true}
						height='120'
						width='120'
						ariaLabel='dna-loading'
						wrapperStyle={{}}
						wrapperClass='dna-wrapper'
					/>
				</div>
			)}
		</>
	);
};
