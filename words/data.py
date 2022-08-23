# import mysql.connector
from  words.models import Categories


# mydb = mysql.connector.connect(
#     host="localhost",
#     user="admin",
#     pass 'word'="admin",
#     database="djangodatabase"
# )

# print(mydb)

# mycursor = mydb.cursor()
# sql = "INSERT INTO Categories(category, category_image, category_icon) VALUES (%s, %s, %s)"
# val = [
#     ("Action (set A)", "static/assets/images/ACTIONS3.jpg", "fa-solid fa-person-hiking"),
#     ("Action (set B)", "../static/assets/images/ACTIONS4.jpg", "fa-solid fa-person-biking"),
#     ("Animal (set A)", "../static/assets/images/ANIMALS1.jpg", "fa-solid fa-cat"),
#     ("Animal (set B)", "../static/assets/images/ANIMALS3.jpg", "fa-solid fa-frog"),
#     ("Clothes", "../static/assets/images/CLOTHES2.jpg", "fa-solid fa-shirt"),
#     ("Emotions", "../static/assets/images/EMOTIONS.jpg", "fa-solid fa-face-grin-wide"),
#     ("Food", "../static/assets/images/FOOD2.jpg", "fa-solid fa-apple-whole"),
#     ("Nature", "../static/assets/images/NATURE.jpg", "fa-brands fa-canadian-maple-leaf"),
#     ("Home", "../static/assets/images/HOME.jpg", "fa-solid fa-house-chimney"),
# ]
# mycursor.executemany(sql, val)
# mydb.commit()
# print(mycursor.rowcount, "record was inserted.")



def insert_all():
    Categories.objects.all().delete()  # remove all records
    categories = [
        ("Action (set A)", "static/assets/images/ACTIONS3.jpg",
         "fa-solid fa-person-hiking"),
        ("Action (set B)", "../static/assets/images/ACTIONS4.jpg",
         "fa-solid fa-person-biking"),
        ("Animal (set A)", "../static/assets/images/ANIMALS1.jpg", "fa-solid fa-cat"),
        ("Animal (set B)", "../static/assets/images/ANIMALS3.jpg", "fa-solid fa-frog"),
        ("Clothes", "../static/assets/images/CLOTHES2.jpg", "fa-solid fa-shirt"),
        ("Emotions", "../static/assets/images/EMOTIONS.jpg",
         "fa-solid fa-face-grin-wide"),
        ("Food", "../static/assets/images/FOOD2.jpg", "fa-solid fa-apple-whole"),
        ("Nature", "../static/assets/images/NATURE.jpg",
         "fa-brands fa-canadian-maple-leaf"),
        ("Home", "../static/assets/images/HOME.jpg", "fa-solid fa-house-chimney"),
    ]
    for st in categories:
        cat = Categories(
            category=st[0], category_image=st[1], category_icon=st[2])
        cat.save()
    print("Records added with last id:" + str(en.id) )
    # return render(request,'signup_student.html',{'msg':str1})

# for i in range(len(words))
    for id, val in enumerate(words):
        cat = Categories(category=categories[id][0], category_image=categories[id][1], category_icon=categories[id][2])
        cat.save()
        for dict in val:
            en = Words(word=dict['word'], translation=dict['translation'], word_image=dict['image'], word_audioSrc=dict['audioSrc'], categories=cat)
            en.save()
            en.categories.set([Categories.objects.get(category_id=id)])
            

insert_all()

#  'word's.objects.all().delete()
words = [
    [
        {
             'word': "cry",
            'translation': "плакать",
            'image': "../static/assets/images/cry.jpg",
            'audioSrc': "../static/assets/audio/cry.mp3",
        },
        {
             'word': "dance",
            'translation': "танцевать",
            'image': "../static/assets/images/dance.jpg",
            'audioSrc': "../static/assets/audio/dance.mp3",
        },
        {
             'word': "dive",
            'translation': "нырять",
            'image': "../static/assets/images/dive.jpg",
            'audioSrc': "../static/assets/audio/dive.mp3",
        },
        {
             'word': "draw",
            'translation': "рисовать",
            'image': "../static/assets/images/draw.jpg",
            'audioSrc': "../static/assets/audio/draw.mp3",
        },
        {
             'word': "fish",
            'translation': "ловить рыбу",
            'image': "../static/assets/images/fish.jpg",
            'audioSrc': "../static/assets/audio/fish.mp3",
        },
        {
             'word': "fly",
            'translation': "летать",
            'image': "../static/assets/images/fly.jpg",
            'audioSrc': "../static/assets/audio/fly.mp3",
        },
        {
             'word': "hug",
            'translation': "обнимать",
            'image': "../static/assets/images/hug.jpg",
            'audioSrc': "../static/assets/audio/hug.mp3",
        },
        {
             'word': "jump",
            'translation': "прыгать",
            'image': "../static/assets/images/jump.jpg",
            'audioSrc': "../static/assets/audio/jump.mp3",
        },
    ],
    [
        {
             'word': "open",
            'translation': "открывать",
            'image': "../static/assets/images/open.jpg",
            'audioSrc': "../static/assets/audio/open.mp3",
        },
        {
             'word': "play",
            'translation': "играть",
            'image': "../static/assets/images/play.jpg",
            'audioSrc': "../static/assets/audio/play.mp3",
        },
        {
             'word': "point",
            'translation': "указывать",
            'image': "../static/assets/images/point.jpg",
            'audioSrc': "../static/assets/audio/point.mp3",
        },
        {
             'word': "ride",
            'translation': "ездить",
            'image': "../static/assets/images/ride.jpg",
            'audioSrc': "../static/assets/audio/ride.mp3",
        },
        {
             'word': "run",
            'translation': "бегать",
            'image': "../static/assets/images/run.jpg",
            'audioSrc': "../static/assets/audio/run.mp3",
        },
        {
             'word': "sing",
            'translation': "петь",
            'image': "../static/assets/images/sing.jpg",
            'audioSrc': "../static/assets/audio/sing.mp3",
        },
        {
             'word': "skip",
            'translation': "пропускать, прыгать",
            'image': "../static/assets/images/skip.jpg",
            'audioSrc': "../static/assets/audio/skip.mp3",
        },
        {
             'word': "swim",
            'translation': "плавать",
            'image': "../static/assets/images/swim.jpg",
            'audioSrc': "../static/assets/audio/swim.mp3",
        },
    ],
    [
        {
             'word': "cat",
            'translation': "кот",
            'image': "../static/assets/images/cat.jpg",
            'audioSrc': "../static/assets/audio/cat.mp3",
        },
        {
             'word': "chick",
            'translation': "цыплёнок",
            'image': "../static/assets/images/chick.jpg",
            'audioSrc': "../static/assets/audio/chick.mp3",
        },
        {
             'word': "chicken",
            'translation': "курица",
            'image': "../static/assets/images/chicken.jpg",
            'audioSrc': "../static/assets/audio/chicken.mp3",
        },
        {
             'word': "dog",
            'translation': "собака",
            'image': "../static/assets/images/dog.jpg",
            'audioSrc': "../static/assets/audio/dog.mp3",
        },
        {
             'word': "horse",
            'translation': "лошадь",
            'image': "../static/assets/images/horse.jpg",
            'audioSrc': "../static/assets/audio/horse.mp3",
        },
        {
             'word': "pig",
            'translation': "свинья",
            'image': "../static/assets/images/pig.jpg",
            'audioSrc': "../static/assets/audio/pig.mp3",
        },
        {
             'word': "rabbit",
            'translation': "кролик",
            'image': "../static/assets/images/rabbit.jpg",
            'audioSrc': "../static/assets/audio/rabbit.mp3",
        },
        {
             'word': "sheep",
            'translation': "овца",
            'image': "../static/assets/images/sheep.jpg",
            'audioSrc': "../static/assets/audio/sheep.mp3",
        },
    ],
    [
        {
             'word': "bird",
            'translation': "птица",
            'image': "../static/assets/images/bird.jpg",
            'audioSrc': "../static/assets/audio/bird.mp3",
        },
        {
             'word': "fish",
            'translation': "рыба",
            'image': "../static/assets/images/fish1.jpg",
            'audioSrc': "../static/assets/audio/fish.mp3",
        },
        {
             'word': "frog",
            'translation': "жаба",
            'image': "../static/assets/images/frog.jpg",
            'audioSrc': "../static/assets/audio/frog.mp3",
        },
        {
             'word': "giraffe",
            'translation': "жирафа",
            'image': "../static/assets/images/giraffe.jpg",
            'audioSrc': "../static/assets/audio/giraffe.mp3",
        },
        {
             'word': "lion",
            'translation': "лев",
            'image': "../static/assets/images/lion.jpg",
            'audioSrc': "../static/assets/audio/lion.mp3",
        },
        {
             'word': "mouse",
            'translation': "мышь",
            'image': "../static/assets/images/mouse.jpg",
            'audioSrc': "../static/assets/audio/mouse.mp3",
        },
        {
             'word': "turtle",
            'translation': "черепаха",
            'image': "../static/assets/images/turtle.jpg",
            'audioSrc': "../static/assets/audio/turtle.mp3",
        },
        {
             'word': "dolphin",
            'translation': "дельфин",
            'image': "../static/assets/images/dolphin.jpg",
            'audioSrc': "../static/assets/audio/dolphin.mp3",
        },
    ],
    [
        {
             'word': "skirt",
            'translation': "юбка",
            'image': "../static/assets/images/skirt.jpg",
            'audioSrc': "../static/assets/audio/skirt.mp3",
        },
        {
             'word': "pants",
            'translation': "брюки",
            'image': "../static/assets/images/pants.jpg",
            'audioSrc': "../static/assets/audio/pants.mp3",
        },
        {
             'word': "blouse",
            'translation': "блузка",
            'image': "../static/assets/images/blouse.jpg",
            'audioSrc': "../static/assets/audio/blouse.mp3",
        },
        {
             'word': "dress",
            'translation': "платье",
            'image': "../static/assets/images/dress.jpg",
            'audioSrc': "../static/assets/audio/dress.mp3",
        },
        {
             'word': "boot",
            'translation': "ботинок",
            'image': "../static/assets/images/boot.jpg",
            'audioSrc': "../static/assets/audio/boot.mp3",
        },
        {
             'word': "shirt",
            'translation': "рубашка",
            'image': "../static/assets/images/shirt.jpg",
            'audioSrc': "../static/assets/audio/shirt.mp3",
        },
        {
             'word': "coat",
            'translation': "пальто",
            'image': "../static/assets/images/coat.jpg",
            'audioSrc': "../static/assets/audio/coat.mp3",
        },
        {
             'word': "shoe",
            'translation': "туфли",
            'image': "../static/assets/images/shoe.jpg",
            'audioSrc': "../static/assets/audio/shoe.mp3",
        },
    ],
    [
        {
             'word': "sad",
            'translation': "грустный",
            'image': "../static/assets/images/sad.jpg",
            'audioSrc': "../static/assets/audio/sad.mp3",
        },
        {
             'word': "angry",
            'translation': "сердитый",
            'image': "../static/assets/images/angry.jpg",
            'audioSrc': "../static/assets/audio/angry.mp3",
        },
        {
             'word': "happy",
            'translation': "счастливый",
            'image': "../static/assets/images/happy.jpg",
            'audioSrc': "../static/assets/audio/happy.mp3",
        },
        {
             'word': "tired",
            'translation': "уставший",
            'image': "../static/assets/images/tired.jpg",
            'audioSrc': "../static/assets/audio/tired.mp3",
        },
        {
             'word': "surprised",
            'translation': "удивлённый",
            'image': "../static/assets/images/surprised.jpg",
            'audioSrc': "../static/assets/audio/surprised.mp3",
        },
        {
             'word': "scared",
            'translation': "испуганный",
            'image': "../static/assets/images/scared.jpg",
            'audioSrc': "../static/assets/audio/scared.mp3",
        },
        {
             'word': "smile",
            'translation': "улыбка",
            'image': "../static/assets/images/smile.jpg",
            'audioSrc': "../static/assets/audio/smile.mp3",
        },
        {
             'word': "laugh",
            'translation': "смех",
            'image': "../static/assets/images/laugh.jpg",
            'audioSrc': "../static/assets/audio/laugh.mp3",
        },
    ],
    [
        {
            'word': "vegetables",
            'translation': "овощи",
            'image': "../static/assets/images/vegetables.jpg",
            'audioSrc': "../static/assets/audio/vegetables.mp3",
        },
        {
            'word': "fruits",
            'translation': "фрукты",
            'image': "../static/assets/images/fruits.jpg",
            'audioSrc': "../static/assets/audio/fruits.mp3",
        },
        {
            'word': "breakfast",
            'translation': "завтрак",
            'image': "../static/assets/images/breakfast.jpg",
            'audioSrc': "../static/assets/audio/breakfast.mp3",
        },
        {
            'word': "cake",
            'translation': "торт",
            'image': "../static/assets/images/cake.jpg",
            'audioSrc': "../static/assets/audio/cake.mp3",
        },
        {
            'word': "cocktail",
            'translation': "коктейль",
            'image': "../static/assets/images/cocktail.jpg",
            'audioSrc': "../static/assets/audio/cocktail.mp3",
        },
        {
            'word': "pizza",
            'translation': "пицца",
            'image': "../static/assets/images/pizza.jpg",
            'audioSrc': "../static/assets/audio/pizza.mp3",
        },
        {
            'word': "meat",
            'translation': "мясо",
            'image': "../static/assets/images/meat.jpg",
            'audioSrc': "../static/assets/audio/meat.mp3",
        },
        {
            'word': "soup",
            'translation': "суп",
            'image': "../static/assets/images/soup.jpg",
            'audioSrc': "../static/assets/audio/soup.mp3",
        },
    ],
    [
        {
            'word': "tree",
            'translation': "дерево",
            'image': "../static/assets/images/tree.jpg",
            'audioSrc': "../static/assets/audio/tree.mp3",
        },
        {
            'word': "mountain",
            'translation': "гора",
            'image': "../static/assets/images/mountain.jpg",
            'audioSrc': "../static/assets/audio/mountain.mp3",
        },
        {
            'word': "river",
            'translation': "река",
            'image': "../static/assets/images/river.jpg",
            'audioSrc': "../static/assets/audio/river.mp3",
        },
        {
            'word': "beach",
            'translation': "пляж",
            'image': "../static/assets/images/beach.jpg",
            'audioSrc': "../static/assets/audio/beach.mp3",
        },
        {
            'word': "forest",
            'translation': "лес",
            'image': "../static/assets/images/forest.jpg",
            'audioSrc': "../static/assets/audio/forest.mp3",
        },
        {
            'word': "field",
            'translation': "поле",
            'image': "../static/assets/images/field.jpg",
            'audioSrc': "../static/assets/audio/field.mp3",
        },
        {
            'word': "flowers",
            'translation': "цветы",
            'image': "../static/assets/images/flowers.jpg",
            'audioSrc': "../static/assets/audio/flowers.mp3",
        },
        {
            'word': "sea",
            'translation': "море",
            'image': "../static/assets/images/sea.jpg",
            'audioSrc': "../static/assets/audio/sea.mp3",
        },
    ],
    [
        {
            'word': "living room",
            'translation': "гостиная",
            'image': "../static/assets/images/livingroom.jpg",
            'audioSrc': "../static/assets/audio/livingroom.mp3",
        },
        {
            'word': "bedroom",
            'translation': "спальня",
            'image': "../static/assets/images/bedroom.jpg",
            'audioSrc': "../static/assets/audio/bedroom.mp3",
        },
        {
            'word': "kitchen",
            'translation': "кухня",
            'image': "../static/assets/images/kitchen.jpg",
            'audioSrc': "../static/assets/audio/kitchen.mp3",
        },
        {
            'word': "fireplace",
            'translation': "камин",
            'image': "../static/assets/images/fireplace.jpg",
            'audioSrc': "../static/assets/audio/fireplace.mp3",
        },
        {
            'word': "curtains",
            'translation': "шторы",
            'image': "../static/assets/images/curtains.jpg",
            'audioSrc': "../static/assets/audio/curtains.mp3",
        },
        {
            'word': "armchair",
            'translation': "кресло",
            'image': "../static/assets/images/armchair.jpg",
            'audioSrc': "../static/assets/audio/armchair.mp3",
        },
        {
            'word': "sofa",
            'translation': "диван",
            'image': "../static/assets/images/sofa.jpg",
            'audioSrc': "../static/assets/audio/sofa.mp3",
        },
        {
            'word': "window",
            'translation': "окно",
            'image': "../static/assets/images/window.jpg",
            'audioSrc': "../static/assets/audio/window.mp3",
        },
    ],
]
