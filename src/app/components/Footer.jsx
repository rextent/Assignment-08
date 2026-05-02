
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand + Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">SkillSphere</h2>
                    <p className="text-sm mb-4">
                        Empower your future with industry-level skills. <br /> Learn anytime, anywhere.
                    </p>
                    <p className="text-sm">📧 support@skillsphere.com</p>
                    <p className="text-sm">📍 Dhaka, Bangladesh</p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Courses</li>
                        <li className="hover:text-white cursor-pointer">My Profile</li>
                    </ul>
                </div>

                {/* Legal + Social */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm mb-4">
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>

                    <div className="flex gap-4 mt-4">
                        <span className="cursor-pointer hover:text-white">🌐</span>
                        <span className="cursor-pointer hover:text-white">📘</span>
                        <span className="cursor-pointer hover:text-white">🐦</span>
                        <span className="cursor-pointer hover:text-white">📸</span>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center text-sm py-4">
                © {new Date().getFullYear()} SkillSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;