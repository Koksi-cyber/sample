import React from "react"
import { Image } from "react-bootstrap";

export default function Nfttrade() {

    const content = [
        {
            "key": 1,
            "title": "Entrepot",
            "p": [
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Buy@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                },
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Sale@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                }
            ]

        },
        {
            "key": 2,
            "title": "ICPSwap",
            "p": [
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Buy@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                },
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Sale@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                }
            ]

        },
        {
            "key": 3,
            "title": "CCC",
            "p": [
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Buy@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                },
                {
                    "src": "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
                    "text1": "Sale@12.0 ICP",
                    "text2": "2022-12-11 12:00"
                }
            ]

        }

    ]

    return (
        <section className="my-5">
            <h2 className="my-3 text-center text-md-start"> Nft Trade  </h2>
            {
                content.map(item => {
                    return <div className="bg-light rounded p-5 my-3" key={item.key}>
                        <h3>{item.title}</h3>

                        <Image src={item.p[0].src} className="rounded d-inline" width={80} height={80} />
                        <p className="d-inline ">{item.p[0].text1}</p>
                        <p className="d-inline ms-auto">{item.p[0].text2}</p>
                    </div>
                })
            }

        </section>
    )
}