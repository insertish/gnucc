#include <example.h>

Example::Example(int a) {
	_a = a;
};

void Example::print() {
	std::cout << _a << '\n';
};