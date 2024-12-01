const UserProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <img
          src="profile-image.jpg"
          alt="Profile Image"
          className="w-32 h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div>
          <h1 className="text-2xl font-bold hover:text-blue-500">John Doe</h1>
          <p className="text-gray-600">Software Developer</p>
        </div>
      </div>
      <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default UserProfile;

