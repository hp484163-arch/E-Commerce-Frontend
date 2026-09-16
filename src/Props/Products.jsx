export const Products = ({ name, price, image }) => {
  return (
    <div className="max-w-sm bg-[#FAF7F0] border border-[#D8CFB8] rounded-sm overflow-hidden hover:border-[#3D4A34] transition-colors duration-300 group">
      <div className="bg-[#E4DCC6] p-8 flex items-center justify-center h-56">
        <img
          src={image}
          alt={name}
          className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-serif text-xl text-[#2B2B26] mb-1">{name}</div>
        <p className="text-[#3D4A34] text-lg font-serif">
          ${Number(price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};