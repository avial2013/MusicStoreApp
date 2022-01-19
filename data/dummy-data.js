// import Cart from "../models/Cart";
import Category from "../models/Category";
// import PaymentDetails from "../models/PaymentDetails";
import Product from './../models/Product';

export const CATEGORIES = [
    new Category(1, 'String Instruments', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FcNd8AUR.jpg&f=1&nofb=1'),
    new Category(2, 'Wind Instruments', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F04%2FFlute-Wallpaper-Gallery.jpg&f=1&nofb=1'),
    new Category(3, 'Percussion Instruments', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2067862.jpg&f=1&nofb=1'),
    new Category(4, 'Keyboard Instruments', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FRQo0jug.jpg&f=1&nofb=1'),
    new Category(5, 'Electronic Instruments', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4135749.jpg&f=1&nofb=1'),
    new Category(6, 'Traditional Instruments', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2Fb%2Fd%2F779089-music-instruments-wallpaper-1920x1200-windows-xp.jpg&f=1&nofb=1')
]

export const PRODUCTS = [
    new Product(1, 1, 'https://audioshopdubai.com/wp-content/uploads/2020/05/GCX40II_e.jpg', 'Classic Guitar', 'Standard 6-Strings medium wood guitar', '125X42cm', 25, 250, 'No reviews yet'),
    new Product(2, 1, 'https://www.teahub.io/photos/full/5-56872_acoustic-guitar-wallpaper-hd-acoustic-guitar.jpg', 'Acoustic Guitar', 'Strong wood and metal materials combined to be a big and strong guitar', '135X52cm', 25, 780, 'No reviews yet'),
    new Product(3, 1, 'https://avatars.mds.yandex.net/i?id=2a0000017a0fdfb82c4a6000c136c7659a55-4566903-images-thumbs&n=13', 'Violin', 'Standard 4-STrings Strong & Good wood quality violin', '50X35cm', 25, 450, 'No reviews yet'),
    new Product(4, 1, 'https://avatars.mds.yandex.net/i?id=d420ee120ecbd853c9d92b91802b6245-4580567-images-thumbs&n=13', 'Chello', 'Big Instrument of strings', '220X78cm', 40, 980, 'No reviews yet'),

    new Product(5, 2, 'https://i.pinimg.com/736x/61/0d/0d/610d0d5db6869e4c53c9f24d18c086db--flute.jpg', 'Side Flute', 'Gold shiny side flute exp', '45X15cm', 25, 645, 'No reviews yet'),
    new Product(6, 2, 'https://avatars.mds.yandex.net/i?id=80e0e62ef72ecc44b574de643a3ede2e-5713119-images-thumbs&n=13', 'Saxophone', 'Complex gold crafted saxophone exp', '45X34cm', 25, 560, 'No reviews yet'),
    new Product(7, 2, 'https://avatars.mds.yandex.net/i?id=df86d571da06deb632123ec6401d739d-4353206-images-thumbs&n=13', 'French Horn', 'Gold French wind instrument exp', '45X43cm', 45, 870, 'No reviews yet'),
    new Product(8, 2, 'https://avatars.mds.yandex.net/i?id=5e154272f811b9138974b91b835f1758-4012518-images-thumbs&n=13', 'Trumpet', 'Simple gold wind instrument for fun', '67X25cm', 25, 440, 'No reviews yet'),

    new Product(9, 3, 'https://wallpaperskingdom.com/sites/default/files/drum-kit-wallpaper-43991-472634.png', 'Drums Kit', 'Full IBANZ drums kit on special sail now', '220X150X180cm', 75, 4500, 'Best Drums Kit EVER!!!'),
    new Product(10, 3, 'https://blog.sweelee.com/uploads/2018/01/cajon-tapa.jpg', 'Cajón', 'Drum wooden box, for sitting and drumming', '35X25cm', 25, 250, 'Amazing drumming box!'),
    new Product(11, 3, 'https://photo.jazz-shop.ru/7/4/74878/108879.500-n.jpg', 'Glockenspiel', 'Set of metal bars in different melody scales, tapping with drum sticks', '215X45X145cm', 45, 450, 'N reviews yet'),
    new Product(12, 3, 'https://cs5.livemaster.ru/storage/6a/18/8df038f5bf1918887441f8e375fh--percussion-instruments-forged-glucagon-deluxe-steel-space-dru.jpg', 'Tank Drum', 'Metal rounded drumming instrument,(Indian)', '25X30cm', 30, 220, 'No reviews yet'),

    new Product(13, 4, 'https://uaomos.news/upload/iblock/3a6/3a6598655921ed11cb9a3eb34c971812.jpg', 'Winged Piano', 'Full classic hand made Piano,black', '250X350X160cm', 450, 9800, 'No reviews yet'),
    new Product(14, 4, 'https://sevdshi.ru/images/instrument/Clavichord.jpg', 'Clavichord', 'Akind of a Piano', '150X125X122cm', 350, 3200, 'No reviews yet'),
    new Product(15, 4, 'https://wallpapercave.com/wp/wp4132948.jpg', 'Accordion', 'Half keyboard & Half wind instrument', '54X35', 30, 450, 'No reviews yet'),
    new Product(16, 4, 'https://www.vsl.co.at/images/EmbNav_Celesta_720x300.jpg', 'Celesta', 'Tiny Piano', '120X98cm', 200, 4500, 'No reviews yet'),

    new Product(17, 5, 'https://i.pinimg.com/originals/e5/e0/91/e5e0914099ad602f85a80461afddded1.jpg', 'Electric Guitar', 'Guitar with amplifiers, black & red', '145X42cm', 45, 5300, 'No reviews yet'),
    new Product(18, 5, 'https://www.allfordj.ru/upload/iblock/97a/roland_aira_system_1_1.jpg', 'Synthesizer', 'Electric keyboard with lots  of fun things to do', '125X60cm', 45, 2400),
    new Product(19, 5, 'https://s0.bukalapak.com/uploads/content_attachment/5bd7244910e8d7620260ceb5/original/cover.png', 'Electric Drums', 'Electric Drums kit for playing quiet', '165X125X150cm', 55, 4200),
    new Product(20, 5, 'https://pbs.twimg.com/media/Es3R31UW4Agj8P8.jpg', 'Electric organ', 'Electric organ for kids', '165X120cm', 55, 3200, 'No reviews yet'),

    new Product(21, 6, 'https://cdnb.artstation.com/p/assets/images/images/014/444/385/medium/aidin-salsabili-saz01.jpg?1543993929', 'Koto', 'Chinese traditional string instrument', '75X92cm', 100, 7800, 'No reviews yet'),
    new Product(22, 6, 'https://middermusic.com/wp-content/uploads/2020/07/Ravi-Shankars-sitar.jpg', 'Sitar', 'Indian traditional string instrument', '198X45cm', 25, 4500, 'No reviews yet'),
    new Product(23, 6, 'https://im0-tub-ru.yandex.net/i?id=34edc84a53070ed9ff389b2a277aa99b-l&ref=rim&n=13&w=640&h=640', 'Oud', 'Arabic traditional string instrument', '45X35cm', 45, 3200, 'No reviews yet'),
    new Product(24, 6, 'https://topmuz.ru/wa-data/public/shop/products/31/02/40231/images/46460/46460.970.jpg', 'Djembe', 'Ghanaian traditional drums instrument', '25X45cm', 43, 3200, 'No reviews yet')
]
