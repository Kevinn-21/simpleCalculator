public class calculator {
    public int add(int num1, int num2) {
        return num1 + num2;
    }
    public int subtract(int num1, int num2) {
        return num1-num2;
    }
    public int multiply(int num1, int num2) {
        return num1*num2;
    }
    public double divide(int num1, int num2) {
        return (double)num1 / num2; 
    }
    public int square(int num1) {
        return num1 * num1;
    }


    public static void main(String[] args) {
        calculator calc = new calculator();
        int num2 = 2;
        int num3 = 11;
        double num4 = calc.divide(num2, num3);
        System.out.println(num4);
    }
}
