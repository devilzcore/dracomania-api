# About API
Dracomania is an API for studies, where you can find the data of all the cards in the Elma Chips line. <br>
**Made with Nodejs, Express, MongoDB.**

# How to use
> With it it is possible to search all or one of the cards in the database
> http://localhost:8080/api/cards/:id or http://localhost:8080/api/cards/

> Create new letters
http://localhost:8080/api/cards/

To add a new card, type the lines below
```
{
	"img": "http...",
	"name": "Zeus",
	"magic": 28,
	"str": 28,
	"fire": 26
}
```
> Update an existing letter
http://localhost:8080/api/cards/:id

> And delete one or all of the letters
http://localhost:8080/api/cards/:id or http://localhost:8080/api/cards/

**Each card has its ID in the database according to the actual card numbers. And they are automatically generated as they are added to the database.**

# Insomnia
To test the [Insomnia](https://insomnia.rest/download/) just download the executable and import the file ` Insomnia_export.json`. 

> Click on Workspace → `Import/Export` → `Import Data` → `From File` → and select the file.