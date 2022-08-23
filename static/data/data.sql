val = [
 ("Action (set A)", "static/assets/images/ACTIONS3.jpg", "fa-solid fa-person-hiking"),
 ("Action (set B)", "../static/assets/images/ACTIONS4.jpg", "fa-solid fa-person-biking"),
 ("Animal (set A)", "../static/assets/images/ANIMALS1.jpg", "fa-solid fa-cat"),
 ("Animal (set B)", "../static/assets/images/ANIMALS3.jpg", "fa-solid fa-frog"),
 ("Clothes", "../static/assets/images/CLOTHES2.jpg", "fa-solid fa-shirt"),
 ("Emotions", "../static/assets/images/EMOTIONS.jpg", "fa-solid fa-face-grin-wide"),
 ("Food", "../static/assets/images/FOOD2.jpg", "fa-solid fa-apple-whole"),
 ("Nature", "../static/assets/images/NATURE.jpg", "fa-brands fa-canadian-maple-leaf"),
  ("Home", "../static/assets/images/HOME.jpg", "fa-solid fa-house-chimney"),
]


mydb = mysql.connector.connect(
  host="localhost",
  user="admin",
  password="admin",
  database="djangodatabase"
)
