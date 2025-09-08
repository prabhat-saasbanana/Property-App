'use client'

export default function MoreDropdown() {
  return (
    <div className="relative inline-block group">
      {/* Trigger Button */}
      <button
        className="inline-flex w-full items-center justify-center gap-x-1.5 font-bold  hover:text-[var(--nav-hover-color)]"
      >
        More
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-[0_0_12px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-350">
        <div className="py-1 text-sm text-gray-700">
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Property Details
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Service Details
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Agent Profile
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Blog Details
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Terms
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            Privacy
          </a>
          <a href="#" className="block px-4 py-2 font-bold  hover:text-[var(--nav-hover-color)]">
            404
          </a>
        </div>
      </div>
    </div>
  )
}
