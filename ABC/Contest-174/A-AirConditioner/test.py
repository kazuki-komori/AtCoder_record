import unittest
import sys

sys.path.append("ABC/Contest-174/A-AirConditioner")
main = __import__('main')


class MyTestCase(unittest.TestCase):
    def test_パターン1(self):
        self.assertEqual("No", main.solution(25))


if __name__ == '__main__':
    unittest.main()
