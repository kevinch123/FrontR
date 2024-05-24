const products = [
  {
    id: 1,
    name: 'Chorizo ahumado',
    href: '#',
    imageSrc: 'https://progcarne.com/storage/app/uploads/public/629/000/14a/62900014ab1cc178930975.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2000/u',
    color: 'Carne de res etc',
  },
  {
    id: 2,
    name: 'Suizo',
    href: '#',
    imageSrc: 'https://co.all.biz/img/co/catalog/23997.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2000/u',
    color: 'Carnde de res , cerdo etc',
  },
  {
    id: 3,
    name: 'Salchicha paquete*20 ',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtdUpcpFI36jUepOpCiaz28-e_evBAbqHkS2oKAR6mA&s',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20000/paquete',
    color: 'De pollo',
  },
  {
    id: 4,
    name: 'Mortadela',
    href: '#',
    imageSrc: 'https://gourmetdemexico.com.mx/wp-content/uploads/2021/07/que-es-la-mortadela-origen-1.jpg',
    imageAlt: "Paquete *20.",
    price: '12000/paquete',
    color: 'de cerdo etc..',
  },
  // More products...
]

export default function Produc() {
  return (
    <div className="bg-custom-gray p-4">
      <div className="mx-auto max-w-3xl px-2 py-8 sm:px-4 sm:py-12 lg:max-w-5xl lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos Embutidos el cielo</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
