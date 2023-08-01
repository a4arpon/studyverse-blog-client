const Header = () => {
  return (
    <header
      className="hero min-h-screen bg-fixed"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-8xl font-bold">StudyVerse</h1>
          <p className="mb-10 text-5xl">
            <span className="text-8xl">Share</span> your{' '}
            <span className="text-7xl">knowledge</span> and try to help{' '}
            <span className="text-8xl">upscale</span> others.
          </p>
          <button className="btn btn-neutral">Explore Our Blogs</button>
        </div>
      </div>
    </header>
  )
}

export default Header
