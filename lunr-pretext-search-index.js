var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "egm-maths2-3-3",
  "level": "1",
  "url": "egm-maths2-3-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These lecture notes accompany the course Mathematics 2 and are intended as a structured introduction to central mathematical methods used in engineering sciences. The course builds on prior mathematical knowledge and aims to deepen both technical understanding and mathematical maturity.  A central goal of the course is to strengthen the ability to identify questions arising in engineering applications that can be formulated and solved mathematically. For this reason, the presentation emphasizes not only computational techniques, but also clear reasoning, precise language, and the development of coherent mathematical arguments. Students should learn to distinguish assumptions, rules, and conclusions, and to communicate their ideas and solution strategies in a mathematically sound way.  The course covers selected topics from linear algebra, differentiation in , differential equations, and integration in several variables. In particular, we study matrices, systems of linear equations, inverse matrices, determinants, linear maps, eigenvalues, and diagonalization; the foundations and applications of differentiation in higher dimensions; basic methods for differential equations; and the notions of curve integrals, line integrals, and surface and volume integrals over normal domains.  Throughout these notes, the focus is on recognizing typical problem structures, applying standard methods reliably, and developing confidence in the use of mathematical tools that are fundamental in engineering practice and in the scientific literature.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-vectors-matrices-linear-systems",
  "level": "1",
  "url": "section-vectors-matrices-linear-systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors, Matrices and Linear Systems of Equations",
  "body": " Vectors, Matrices and Linear Systems of Equations   In this section, we learn the basic notions underlying linear algebra: vectors, matrices and linear systems of equations. Many of the later concepts of linear algebra build on these elementary objects and the operations defined on them.    Brief reminder: vectors   In physics, many real-world quantities—such as force, velocity, or displacement—cannot be fully described by a single number. For example, if you apply a force to push a box, the outcome depends not only on how hard you push (the magnitude) but also on the direction in which you are pushing.  To capture both magnitude and direction simultaneously, we use mathematical objects called vectors. This concept extends naturally beyond physical space into abstract mathematics, allowing us to handle multi-dimensional spaces and systems.    Vector   A vector of size is an ordered tuple of real numbers. The set of all vectors of size is denoted by . A vector is commonly written as or in column form as     Let us look at a concrete numerical representation of a vector in three-dimensional space.   A Vector in  An example of a vector in is    In and , vectors can be visualized as arrows in Euclidean space. In this geometric interpretation, a vector has a direction and a length, but it is not tied to a fixed starting point. A particularly useful representative is the position vector that starts at the origin.  At the same time, the algebraic point of view is more general: a vector is determined by its components. The geometric picture is very helpful in two and three dimensions, but the coordinate description remains meaningful in arbitrary dimension.  To make vectors useful, we need mathematical rules for how to combine them. The two most fundamental operations are adding two vectors and multiplying a vector by a real number.   Vector Operations   Let and let . The sum of two vectors of the same size and the scalar multiple of a vector are defined component-wise.    Addition  The sum of and is     Scalar Multiplication  The scalar multiple of by is        Calculating Sums and Scalar Multiples  Let and be vectors in .  Their sum is   If we scale by , we obtain     Resultant Force on a Mechanical Component  Suppose two forces act on a component in the plane:   The total force is obtained by vector addition:   Thus, the component experiences a resultant force with horizontal component and vertical component .    Scaling a Force Vector  Suppose a force acting on a component is represented by   If the same force is applied with twice the intensity, the new force vector is   This illustrates scalar multiplication: all components are multiplied by the same scalar, so the direction remains the same while the magnitude changes.    Interactive: Vector Addition     Interactive: Scalar Multiplication    Having established these basic arithmetic operations, a special vector arises naturally when we scale any vector by zero or subtract a vector from itself.   Zero Vector   The zero vector in is the vector whose components are all equal to zero. It is denoted by and has the form     Just like ordinary numbers, vector operations satisfy several basic algebraic laws.   Laws of Vector Arithmetic   For all vectors and all scalars , the following rules hold.   Associativity of Addition:   Commutativity of Addition:   Neutral Element:   Inverse Element:   Left Distributivity:   Right Distributivity:   Associativity of Scalar Multiplication:   Multiplication by One:      When working with several vectors, we often want to build new vectors from those already given. The most natural way to do this is to scale the vectors and then add them. In this way, we can describe how a vector can be assembled from a collection of basic directions.  This idea is fundamental in linear algebra. It helps us answer questions such as: Can a given vector be generated from other vectors? Do several vectors together describe all directions in a space? And does one of the vectors contribute genuinely new information, or can it already be obtained from the others?   Linear Combination   Let and let . A vector of the form is called a linear combination of the vectors .     A Linear Combination in  Consider the vectors   Then   Hence, is a linear combination of and .   Linear combinations tell us how new vectors can be generated from a given collection of vectors. This naturally leads to the question of whether all vectors in the collection are really needed.  Indeed, it may happen that one of the vectors can already be written as a linear combination of the others. In that case, it does not contribute a genuinely new direction. To distinguish between such redundant situations and genuinely different directions, we introduce the concept of linear independence.   Linear Independence and Basis   Vectors are called linearly independent if the equation has only the trivial solution .  A basis of is a tuple of linearly independent vectors in . In that case, every vector in can be written uniquely as a linear combination of the basis vectors.     Linear dependence and linear independence  This graphic visualizes the concept of linear dependence and linear independence.       A Counterexample in  Consider the vectors   Since , one vector is a scalar multiple of the other. Therefore, the vectors are not linearly independent. Indeed: so we have found a non-trivial solution to the equation    The most intuitive example of a basis is given by the standard coordinate axes.   Standard Basis in  The vectors are linearly independent.  Indeed, the equation becomes so necessarily and .  Hence, is a basis of . This means that every vector in can be written uniquely as a linear combination of and .    Three Linearly Independent Vectors in  Consider the vectors   To test linear independence, we consider   This gives so .  Therefore, the three vectors are linearly independent.    A Counterexample with Three Vectors in  Consider the vectors   Since the vector is a linear combination of the other two.  Hence, the three vectors are not linearly independent.   Besides combining vectors algebraically, we also want to measure geometric quantities such as length, distance, and angle. These are based on the scalar product.   Scalar Product, Norm, Distance, and Angle     Scalar Product  For vectors , the scalar product is defined by     Norm  The norm of is its length:     Distance  The distance between and is     Angle  For two non-zero vectors and , the angle between them is defined by     Orthogonality  Two vectors and are called orthogonal if       The formula for the norm is a direct generalization of the Pythagorean theorem. In two dimensions, a vector forms the hypotenuse of a right triangle whose legs have lengths and . Hence, . The same idea extends to higher dimensions.   Visualizing the Norm via the Pythagorean Theorem   A right-angled triangle formed by a vector and its components, with squares drawn on each side to geometrically illustrate that the square of the norm equals the sum of the squares of the components.      Lengths and Orthogonality  Consider the vectors and .  The norm of is   Their scalar product is   Since the scalar product is zero, the vectors are orthogonal.    A State Vector for Monitoring a Technical System  In engineering applications, vectors are often used to represent system states rather than geometric arrows. For example, the operating condition of a motor might be described by the vector where the components represent, for instance, a temperature deviation, a vibration level, and a current deviation.  Another operating condition may be represented by   The distance between the two states is   This shows that vectors in are not only geometric objects; they can also encode measurements and describe the state of a technical system.    Check Your Understanding   Identifying Orthogonal Vectors   Which of the following vectors is orthogonal to ?      Incorrect. The scalar product is , not zero.     Correct! The scalar product is .     Incorrect. The scalar product is , not zero.     Incorrect. The scalar product is , not zero.      Requirements for a Basis   True or False: Any two non-zero vectors in automatically form a basis of that space.     True  Incorrect. If the two vectors are scalar multiples of one another, then they are not linearly independent and therefore do not form a basis.    False  Correct! Two vectors in form a basis only if they are linearly independent.        Matrices   Matrices provide a convenient way to organize numerical data in rows and columns. They are used to describe systems of linear equations, to encode linear transformations, and to model input-output relations in engineering, economics, and the natural sciences.  In these notes, vectors are regarded as column vectors. Therefore, a vector in can also be viewed as an -matrix.    Matrix, Rows, and Columns   A matrix is a rectangular array of real numbers arranged in rows and columns. A matrix with rows and columns is called an -matrix . The set of all real -matrices is denoted by .  A matrix is written in the form   The entry in the -th row and -th column is denoted by . We also write .  The -th row of is and the -th column of is      An Example of a Matrix  The matrix has rows and columns, so .  Its entry in the first row and third column is . The second row is , and the first column is .    Equality of Matrices   Two matrices and are equal if they have the same size and if all corresponding entries are equal.  Thus, for and , we have exactly if for all and .     Arithmetic Operations on Matrices  We now introduce the basic arithmetic operations for matrices.   Addition and Scalar Multiplication   Let and be matrices of the same size in , and let .  The sum of and is defined component-wise by   The scalar multiple of by is defined by      Addition and Scalar Multiplication  Let   Then   Moreover,     Transpose   Let . The transpose of is the matrix obtained by interchanging rows and columns.  In other words, the entry in row and column of is . Thus,      Computing a Transpose  For the transpose is    Matrix multiplication is the most important operation involving matrices. At first sight, its definition may seem somewhat unintuitive. We therefore begin by defining the matrix product and illustrating it with an example. Later, in a range of applications, we will see that this definition is both natural and extremely useful.   Matrix Multiplication   Let and . Then the product is defined, because the number of columns of equals the number of rows of .  The product is an -matrix whose entries are given by   Equivalently, the entry is obtained as the scalar product of the -th row of and the -th column of .    Hence, the product is defined only if the inner dimensions agree: the number of columns of must equal the number of rows of .   Computing a Matrix Product  Let   Then    Since vectors are regarded as column vectors, matrix multiplication also allows us to multiply a matrix by a vector.   Matrix-Vector Product   Let and let . Interpreting as an -matrix, the product is defined and belongs to .     A Matrix-Vector Product  Let   Then    The matrix-vector product can also be interpreted in terms of the columns of the matrix. If (for example, if , then and ) and then Thus, is a linear combination of the columns of .   Modelling Population Movements  Consider a population distributed between suburban areas ( ) and urban areas ( ). Suppose that in one year, of the suburban population remains in the suburban area and moves to the urban area. Likewise, of the urban population remains in the urban area and moves to the suburban area.  If denotes the population vector at the beginning of the year, then the population vector at the end of the year is   This is an example of a matrix-vector product describing the state update of a system.    Sensor Calibration  Suppose a sensor system records two raw values collected in the vector   A calibration matrix transforms the raw measurements into corrected values:   Thus, matrices can be used to model calibration and coordinate transformations in engineering applications.     Special Matrices and Laws of Arithmetic   Special Matrices   Several classes of matrices occur frequently.    Zero Matrix  A matrix all of whose entries are equal to zero.    Square Matrix  A matrix with the same number of rows and columns.    Identity Matrix  A square matrix whose diagonal entries are equal to and whose off-diagonal entries are equal to . It is denoted by or, if the size matters, by .    Diagonal Matrix  A square matrix whose off-diagonal entries are all zero.    Triangular Matrix  A square matrix is called upper triangular if all entries below the main diagonal are zero, and lower triangular if all entries above the main diagonal are zero.    Symmetric Matrix  A square matrix satisfying .    Skew-Symmetric Matrix  A square matrix satisfying .       Examples of Special Matrices  The matrices are a zero matrix, an identity matrix, and a diagonal matrix, respectively.  Moreover, is upper triangular, and is symmetric.    Laws of Matrix Arithmetic   Let be matrices of suitable sizes, and let . Then the following rules hold.   Addition:  and , provided the matrices have the same size.  Neutral and Inverse Elements:  and .  Associativity of Multiplication:  , whenever all products are defined.  Identity Matrix:  and , where is the identity matrix of suitable size.  Distributivity:  and , whenever the products are defined.  Compatibility with Scalars:  .      Matrix Multiplication Is Not Commutative  In general, matrix multiplication is not commutative. This means that even if both products and are defined, they need not be equal.    A Counterexample to Commutativity  Let   Then   Hence, .       Linear Systems and the Gauss--Jordan Method   Systems of linear equations occur throughout mathematics, science, and engineering. They arise whenever several unknown quantities are linked by linear relations, for example in balance equations, circuit equations, calibration problems, or interpolation tasks.  Our goal is to solve such systems systematically. The key idea is to replace a given system by simpler equivalent systems whose solution sets remain unchanged. This leads to the Gauss algorithm and, as a further refinement, to the Gauss--Jordan method.  Throughout this section, it is important to distinguish carefully between four different objects. The linear system is the mathematical problem we want to solve. Its augmented coefficient matrix is a compact way of writing this problem. The solution set is the set of all vectors that satisfy the system. Finally, the Gauss and Gauss--Jordan methods are procedures that transform the matrix without changing the solution set of the underlying system.    Linear System and Augmented Coefficient Matrix   A system of linear equations with equations and unknowns is a system of the form   Its augmented coefficient matrix is      A Linear and a Non-Linear System  Consider the system This is a linear system. Its augmented coefficient matrix is   In contrast, the system is not linear, because the term is a product of unknowns.    Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.     Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.     Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.    The Solution Set Does Not Change Under Row Operations  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is the same pair of equations in a different order, so the solution set remains unchanged.  After multiplying the first row by , we obtain Since the first equation is just twice the original first equation, the solution set is again unchanged.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still     Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.    This result is the foundation of the elimination methods that follow. We simplify a linear system step by step until its structure becomes transparent.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.     A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.    A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.    A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.    Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is    In general, a given system is not initially in row echelon form. The Gauss algorithm transforms it into such a form.   Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.      Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. Therefore , , and are basic variables, while and are free variables.   Row echelon form is already sufficient to analyze the system and to solve it by back substitution. We can also continue the reduction process further.  The difference between the two methods is simple: in the Gauss algorithm we create zeros below the pivots, while in the Gauss--Jordan method we continue until there are also zeros above the pivots.   Gauss--Jordan Method   The Gauss--Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.     Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes The entries above this pivot are now cleaned. In this case only the second row contains a non-zero entry in that column: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus the matrix is now in reduced row echelon form.  From this form we read off   The variables and are free. Let Then   The free variables are not a mere technical leftover. They parametrize the whole solution set. Each choice of and produces one solution, and every solution arises in exactly this way.  Therefore, the solution set is   If we choose, for instance, and , we obtain one particular solution. But this is only a special solution, not the full solution set.   The position of the pivots tells us a great deal about the solution behavior of a system. The following examples illustrate the three basic situations.   No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Hence the system has no solution.    A Unique Solution  Consider the row echelon form   Every variable column contains a pivot, and the rightmost column does not. Therefore the system has a unique solution. From the last equation we obtain The second equation then gives and the first equation yields   Thus the solution set is     Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . They are not fixed by the system and may be chosen freely.     Infinitely Many Solutions  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Let with . Then   Therefore, the solution set is   It is often useful to write this in parametric vector form:     Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.     These three cases can be remembered by three simple questions.   Is there a pivot in the rightmost column? Then the system is inconsistent.  Does every variable column contain a pivot? Then the solution is unique.  Is there a variable column without a pivot? Then there is a free variable, and therefore infinitely many solutions, provided the system is consistent.    A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.   We can now summarize the practical procedure for solving a linear system.   Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.      Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is    Linear systems can also be interpreted in terms of matrices and vectors. This point of view connects the theory of linear systems with vector arithmetic, linear combinations, and later with linear transformations.  In particular, a system of equations can be understood as the question whether a given vector can be written as a linear combination of the column vectors of a matrix.   Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as     The vector form is conceptually very important: solving the system means deciding whether can be represented as a linear combination of the column vectors of , and if so, in which way.   Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.   When working with matrices, it is often useful to measure how much independent information they contain. The elimination process already provides exactly the right notion for this purpose.  The number of pivots that remain after row reduction tells us how many independent rows or columns are present. This leads to the concept of rank, which later plays a central role in solvability questions and in the structure of solution sets.   Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .     Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus     Check Your Understanding   Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.      Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.      Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.      Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.      Reading a Reduced Row Echelon Form   Consider What is the solution vector?      Incorrect. The entries on the right-hand side are read off directly.     Correct. In reduced row echelon form, the solution can be read off directly.     Incorrect. The order of the coordinates matters.    The system has no solution.  Incorrect. There is no contradictory row.       "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-vector",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Vector.",
  "body": " Vector   A vector of size is an ordered tuple of real numbers. The set of all vectors of size is denoted by . A vector is commonly written as or in column form as    "
},
{
  "id": "ex-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-vector",
  "type": "Example",
  "number": "1.1.2",
  "title": "A Vector in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " A Vector in  An example of a vector in is   "
},
{
  "id": "def-vector-operations",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-vector-operations",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Vector Operations.",
  "body": " Vector Operations   Let and let . The sum of two vectors of the same size and the scalar multiple of a vector are defined component-wise.    Addition  The sum of and is     Scalar Multiplication  The scalar multiple of by is      "
},
{
  "id": "ex-vector-operations",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-vector-operations",
  "type": "Example",
  "number": "1.1.4",
  "title": "Calculating Sums and Scalar Multiples.",
  "body": " Calculating Sums and Scalar Multiples  Let and be vectors in .  Their sum is   If we scale by , we obtain   "
},
{
  "id": "ex-engineering-resultant-force",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-resultant-force",
  "type": "Example",
  "number": "1.1.5",
  "title": "Resultant Force on a Mechanical Component.",
  "body": " Resultant Force on a Mechanical Component  Suppose two forces act on a component in the plane:   The total force is obtained by vector addition:   Thus, the component experiences a resultant force with horizontal component and vertical component .  "
},
{
  "id": "ex-engineering-force-scaling",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-force-scaling",
  "type": "Example",
  "number": "1.1.6",
  "title": "Scaling a Force Vector.",
  "body": " Scaling a Force Vector  Suppose a force acting on a component is represented by   If the same force is applied with twice the intensity, the new force vector is   This illustrates scalar multiplication: all components are multiplied by the same scalar, so the direction remains the same while the magnitude changes.  "
},
{
  "id": "fig-geogebra-vector-addition",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-geogebra-vector-addition",
  "type": "Figure",
  "number": "1.1.7",
  "title": "Interactive: Vector Addition",
  "body": " Interactive: Vector Addition   "
},
{
  "id": "fig-geogebra-scalar-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-geogebra-scalar-multiplication",
  "type": "Figure",
  "number": "1.1.8",
  "title": "Interactive: Scalar Multiplication",
  "body": " Interactive: Scalar Multiplication   "
},
{
  "id": "def-zero-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-zero-vector",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Zero Vector.",
  "body": " Zero Vector   The zero vector in is the vector whose components are all equal to zero. It is denoted by and has the form    "
},
{
  "id": "thm-vector-arithmetic",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#thm-vector-arithmetic",
  "type": "Theorem",
  "number": "1.1.10",
  "title": "Laws of Vector Arithmetic.",
  "body": " Laws of Vector Arithmetic   For all vectors and all scalars , the following rules hold.   Associativity of Addition:   Commutativity of Addition:   Neutral Element:   Inverse Element:   Left Distributivity:   Right Distributivity:   Associativity of Scalar Multiplication:   Multiplication by One:     "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-linear-combination",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Linear Combination.",
  "body": " Linear Combination   Let and let . A vector of the form is called a linear combination of the vectors .   "
},
{
  "id": "ex-linear-combination",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-combination",
  "type": "Example",
  "number": "1.1.12",
  "title": "A Linear Combination in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " A Linear Combination in  Consider the vectors   Then   Hence, is a linear combination of and .  "
},
{
  "id": "def-linear-independence-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-linear-independence-basis",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Linear Independence and Basis.",
  "body": " Linear Independence and Basis   Vectors are called linearly independent if the equation has only the trivial solution .  A basis of is a tuple of linearly independent vectors in . In that case, every vector in can be written uniquely as a linear combination of the basis vectors.   "
},
{
  "id": "fig-linear_dependence",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-linear_dependence",
  "type": "Figure",
  "number": "1.1.14",
  "title": "Linear dependence and linear independence",
  "body": " Linear dependence and linear independence  This graphic visualizes the concept of linear dependence and linear independence.     "
},
{
  "id": "ex-linearly-dependent-r2",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linearly-dependent-r2",
  "type": "Example",
  "number": "1.1.15",
  "title": "A Counterexample in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " A Counterexample in  Consider the vectors   Since , one vector is a scalar multiple of the other. Therefore, the vectors are not linearly independent. Indeed: so we have found a non-trivial solution to the equation   "
},
{
  "id": "ex-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-basis",
  "type": "Example",
  "number": "1.1.16",
  "title": "Standard Basis in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Standard Basis in  The vectors are linearly independent.  Indeed, the equation becomes so necessarily and .  Hence, is a basis of . This means that every vector in can be written uniquely as a linear combination of and .  "
},
{
  "id": "ex-linear-independence-r3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-independence-r3",
  "type": "Example",
  "number": "1.1.17",
  "title": "Three Linearly Independent Vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " Three Linearly Independent Vectors in  Consider the vectors   To test linear independence, we consider   This gives so .  Therefore, the three vectors are linearly independent.  "
},
{
  "id": "ex-linear-dependence-r3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-dependence-r3",
  "type": "Example",
  "number": "1.1.18",
  "title": "A Counterexample with Three Vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " A Counterexample with Three Vectors in  Consider the vectors   Since the vector is a linear combination of the other two.  Hence, the three vectors are not linearly independent.  "
},
{
  "id": "def-scalar-product-metrics",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-scalar-product-metrics",
  "type": "Definition",
  "number": "1.1.19",
  "title": "Scalar Product, Norm, Distance, and Angle.",
  "body": " Scalar Product, Norm, Distance, and Angle     Scalar Product  For vectors , the scalar product is defined by     Norm  The norm of is its length:     Distance  The distance between and is     Angle  For two non-zero vectors and , the angle between them is defined by     Orthogonality  Two vectors and are called orthogonal if      "
},
{
  "id": "fig-norm-pythagoras",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-norm-pythagoras",
  "type": "Figure",
  "number": "1.1.20",
  "title": "Visualizing the Norm via the Pythagorean Theorem",
  "body": " Visualizing the Norm via the Pythagorean Theorem   A right-angled triangle formed by a vector and its components, with squares drawn on each side to geometrically illustrate that the square of the norm equals the sum of the squares of the components.    "
},
{
  "id": "ex-scalar-product-norm",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-scalar-product-norm",
  "type": "Example",
  "number": "1.1.21",
  "title": "Lengths and Orthogonality.",
  "body": " Lengths and Orthogonality  Consider the vectors and .  The norm of is   Their scalar product is   Since the scalar product is zero, the vectors are orthogonal.  "
},
{
  "id": "ex-engineering-state-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-state-vector",
  "type": "Example",
  "number": "1.1.22",
  "title": "A State Vector for Monitoring a Technical System.",
  "body": " A State Vector for Monitoring a Technical System  In engineering applications, vectors are often used to represent system states rather than geometric arrows. For example, the operating condition of a motor might be described by the vector where the components represent, for instance, a temperature deviation, a vibration level, and a current deviation.  Another operating condition may be represented by   The distance between the two states is   This shows that vectors in are not only geometric objects; they can also encode measurements and describe the state of a technical system.  "
},
{
  "id": "exer-mc-orthogonal",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#exer-mc-orthogonal",
  "type": "Exercise",
  "number": "1.1.1.1",
  "title": "Identifying Orthogonal Vectors.",
  "body": " Identifying Orthogonal Vectors   Which of the following vectors is orthogonal to ?      Incorrect. The scalar product is , not zero.     Correct! The scalar product is .     Incorrect. The scalar product is , not zero.     Incorrect. The scalar product is , not zero.    "
},
{
  "id": "exer-tf-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#exer-tf-basis",
  "type": "Exercise",
  "number": "1.1.1.2",
  "title": "Requirements for a Basis.",
  "body": " Requirements for a Basis   True or False: Any two non-zero vectors in automatically form a basis of that space.     True  Incorrect. If the two vectors are scalar multiples of one another, then they are not linearly independent and therefore do not form a basis.    False  Correct! Two vectors in form a basis only if they are linearly independent.    "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix",
  "type": "Definition",
  "number": "1.1.23",
  "title": "Matrix, Rows, and Columns.",
  "body": " Matrix, Rows, and Columns   A matrix is a rectangular array of real numbers arranged in rows and columns. A matrix with rows and columns is called an -matrix . The set of all real -matrices is denoted by .  A matrix is written in the form   The entry in the -th row and -th column is denoted by . We also write .  The -th row of is and the -th column of is    "
},
{
  "id": "ex-matrix-example",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-example",
  "type": "Example",
  "number": "1.1.24",
  "title": "An Example of a Matrix.",
  "body": " An Example of a Matrix  The matrix has rows and columns, so .  Its entry in the first row and third column is . The second row is , and the first column is .  "
},
{
  "id": "def-matrix-equality",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-equality",
  "type": "Definition",
  "number": "1.1.25",
  "title": "Equality of Matrices.",
  "body": " Equality of Matrices   Two matrices and are equal if they have the same size and if all corresponding entries are equal.  Thus, for and , we have exactly if for all and .   "
},
{
  "id": "def-matrix-addition",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-addition",
  "type": "Definition",
  "number": "1.1.26",
  "title": "Addition and Scalar Multiplication.",
  "body": " Addition and Scalar Multiplication   Let and be matrices of the same size in , and let .  The sum of and is defined component-wise by   The scalar multiple of by is defined by    "
},
{
  "id": "ex-matrix-addition-scalar",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-addition-scalar",
  "type": "Example",
  "number": "1.1.27",
  "title": "Addition and Scalar Multiplication.",
  "body": " Addition and Scalar Multiplication  Let   Then   Moreover,   "
},
{
  "id": "def-transposed-matrix",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-transposed-matrix",
  "type": "Definition",
  "number": "1.1.28",
  "title": "Transpose.",
  "body": " Transpose   Let . The transpose of is the matrix obtained by interchanging rows and columns.  In other words, the entry in row and column of is . Thus,    "
},
{
  "id": "ex-transpose",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-transpose",
  "type": "Example",
  "number": "1.1.29",
  "title": "Computing a Transpose.",
  "body": " Computing a Transpose  For the transpose is   "
},
{
  "id": "def-matrix-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-multiplication",
  "type": "Definition",
  "number": "1.1.30",
  "title": "Matrix Multiplication.",
  "body": " Matrix Multiplication   Let and . Then the product is defined, because the number of columns of equals the number of rows of .  The product is an -matrix whose entries are given by   Equivalently, the entry is obtained as the scalar product of the -th row of and the -th column of .   "
},
{
  "id": "ex-matrix-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-multiplication",
  "type": "Example",
  "number": "1.1.31",
  "title": "Computing a Matrix Product.",
  "body": " Computing a Matrix Product  Let   Then   "
},
{
  "id": "def-matrix-vector-product",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-vector-product",
  "type": "Definition",
  "number": "1.1.32",
  "title": "Matrix-Vector Product.",
  "body": " Matrix-Vector Product   Let and let . Interpreting as an -matrix, the product is defined and belongs to .   "
},
{
  "id": "ex-matrix-vector-product",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-vector-product",
  "type": "Example",
  "number": "1.1.33",
  "title": "A Matrix-Vector Product.",
  "body": " A Matrix-Vector Product  Let   Then   "
},
{
  "id": "ex-population-movements",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-population-movements",
  "type": "Example",
  "number": "1.1.34",
  "title": "Modelling Population Movements.",
  "body": " Modelling Population Movements  Consider a population distributed between suburban areas ( ) and urban areas ( ). Suppose that in one year, of the suburban population remains in the suburban area and moves to the urban area. Likewise, of the urban population remains in the urban area and moves to the suburban area.  If denotes the population vector at the beginning of the year, then the population vector at the end of the year is   This is an example of a matrix-vector product describing the state update of a system.  "
},
{
  "id": "ex-sensor-calibration",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-sensor-calibration",
  "type": "Example",
  "number": "1.1.35",
  "title": "Sensor Calibration.",
  "body": " Sensor Calibration  Suppose a sensor system records two raw values collected in the vector   A calibration matrix transforms the raw measurements into corrected values:   Thus, matrices can be used to model calibration and coordinate transformations in engineering applications.  "
},
{
  "id": "def-special-matrices",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-special-matrices",
  "type": "Definition",
  "number": "1.1.36",
  "title": "Special Matrices.",
  "body": " Special Matrices   Several classes of matrices occur frequently.    Zero Matrix  A matrix all of whose entries are equal to zero.    Square Matrix  A matrix with the same number of rows and columns.    Identity Matrix  A square matrix whose diagonal entries are equal to and whose off-diagonal entries are equal to . It is denoted by or, if the size matters, by .    Diagonal Matrix  A square matrix whose off-diagonal entries are all zero.    Triangular Matrix  A square matrix is called upper triangular if all entries below the main diagonal are zero, and lower triangular if all entries above the main diagonal are zero.    Symmetric Matrix  A square matrix satisfying .    Skew-Symmetric Matrix  A square matrix satisfying .     "
},
{
  "id": "ex-special-matrices",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-special-matrices",
  "type": "Example",
  "number": "1.1.37",
  "title": "Examples of Special Matrices.",
  "body": " Examples of Special Matrices  The matrices are a zero matrix, an identity matrix, and a diagonal matrix, respectively.  Moreover, is upper triangular, and is symmetric.  "
},
{
  "id": "thm-matrix-arithmetic",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#thm-matrix-arithmetic",
  "type": "Theorem",
  "number": "1.1.38",
  "title": "Laws of Matrix Arithmetic.",
  "body": " Laws of Matrix Arithmetic   Let be matrices of suitable sizes, and let . Then the following rules hold.   Addition:  and , provided the matrices have the same size.  Neutral and Inverse Elements:  and .  Associativity of Multiplication:  , whenever all products are defined.  Identity Matrix:  and , where is the identity matrix of suitable size.  Distributivity:  and , whenever the products are defined.  Compatibility with Scalars:  .    "
},
{
  "id": "rem-commutativity",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#rem-commutativity",
  "type": "Remark",
  "number": "1.1.39",
  "title": "Matrix Multiplication Is Not Commutative.",
  "body": " Matrix Multiplication Is Not Commutative  In general, matrix multiplication is not commutative. This means that even if both products and are defined, they need not be equal.  "
},
{
  "id": "ex-noncommutative-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-noncommutative-multiplication",
  "type": "Example",
  "number": "1.1.40",
  "title": "A Counterexample to Commutativity.",
  "body": " A Counterexample to Commutativity  Let   Then   Hence, .  "
},
{
  "id": "subsec-linear-systems-2-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear system augmented coefficient matrix solution set Gauss Gauss--Jordan methods "
},
{
  "id": "subsec-linear-systems-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-3",
  "type": "Definition",
  "number": "1.1.41",
  "title": "Linear System and Augmented Coefficient Matrix.",
  "body": " Linear System and Augmented Coefficient Matrix   A system of linear equations with equations and unknowns is a system of the form   Its augmented coefficient matrix is    "
},
{
  "id": "subsec-linear-systems-4",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-4",
  "type": "Example",
  "number": "1.1.42",
  "title": "A Linear and a Non-Linear System.",
  "body": " A Linear and a Non-Linear System  Consider the system This is a linear system. Its augmented coefficient matrix is   In contrast, the system is not linear, because the term is a product of unknowns.  "
},
{
  "id": "subsec-linear-systems-5",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-5",
  "type": "Definition",
  "number": "1.1.43",
  "title": "Solution Set of a Linear System.",
  "body": " Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.   "
},
{
  "id": "subsec-linear-systems-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-6",
  "type": "Definition",
  "number": "1.1.44",
  "title": "Elementary Row Operations and Row Equivalence.",
  "body": " Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.   "
},
{
  "id": "subsec-linear-systems-7",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-7",
  "type": "Example",
  "number": "1.1.45",
  "title": "Examples of the Elementary Row Operations.",
  "body": " Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.  "
},
{
  "id": "subsec-linear-systems-8",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-8",
  "type": "Example",
  "number": "1.1.46",
  "title": "The Solution Set Does Not Change Under Row Operations.",
  "body": " The Solution Set Does Not Change Under Row Operations  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is the same pair of equations in a different order, so the solution set remains unchanged.  After multiplying the first row by , we obtain Since the first equation is just twice the original first equation, the solution set is again unchanged.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still   "
},
{
  "id": "subsec-linear-systems-9",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-9",
  "type": "Theorem",
  "number": "1.1.47",
  "title": "Row Equivalent Systems Have the Same Solution Set.",
  "body": " Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.   "
},
{
  "id": "subsec-linear-systems-11",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-11",
  "type": "Definition",
  "number": "1.1.48",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.   "
},
{
  "id": "subsec-linear-systems-12",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-12",
  "type": "Example",
  "number": "1.1.49",
  "title": "A Matrix in Row Echelon Form.",
  "body": " A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.  "
},
{
  "id": "subsec-linear-systems-13",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-13",
  "type": "Example",
  "number": "1.1.50",
  "title": "A Matrix in Reduced Row Echelon Form.",
  "body": " A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.  "
},
{
  "id": "subsec-linear-systems-14",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-14",
  "type": "Example",
  "number": "1.1.51",
  "title": "A Matrix That Is Not in Row Echelon Form.",
  "body": " A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.  "
},
{
  "id": "subsec-linear-systems-15",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-15",
  "type": "Example",
  "number": "1.1.52",
  "title": "Solving a System in Row Echelon Form.",
  "body": " Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is   "
},
{
  "id": "subsec-linear-systems-17",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-17",
  "type": "Definition",
  "number": "1.1.53",
  "title": "Gauss Algorithm.",
  "body": " Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.    "
},
{
  "id": "subsec-linear-systems-18",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-18",
  "type": "Example",
  "number": "1.1.54",
  "title": "Applying the Gauss Algorithm.",
  "body": " Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. Therefore , , and are basic variables, while and are free variables.  "
},
{
  "id": "subsec-linear-systems-21",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-21",
  "type": "Definition",
  "number": "1.1.55",
  "title": "Gauss--Jordan Method.",
  "body": " Gauss--Jordan Method   The Gauss--Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.   "
},
{
  "id": "subsec-linear-systems-22",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-22",
  "type": "Example",
  "number": "1.1.56",
  "title": "Continuing the Example with Gauss--Jordan.",
  "body": " Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes The entries above this pivot are now cleaned. In this case only the second row contains a non-zero entry in that column: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus the matrix is now in reduced row echelon form.  From this form we read off   The variables and are free. Let Then   The free variables are not a mere technical leftover. They parametrize the whole solution set. Each choice of and produces one solution, and every solution arises in exactly this way.  Therefore, the solution set is   If we choose, for instance, and , we obtain one particular solution. But this is only a special solution, not the full solution set.  "
},
{
  "id": "subsec-linear-systems-24",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-24",
  "type": "Example",
  "number": "1.1.57",
  "title": "No Solution.",
  "body": " No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Hence the system has no solution.  "
},
{
  "id": "subsec-linear-systems-25",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-25",
  "type": "Example",
  "number": "1.1.58",
  "title": "A Unique Solution.",
  "body": " A Unique Solution  Consider the row echelon form   Every variable column contains a pivot, and the rightmost column does not. Therefore the system has a unique solution. From the last equation we obtain The second equation then gives and the first equation yields   Thus the solution set is   "
},
{
  "id": "subsec-linear-systems-26",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-26",
  "type": "Definition",
  "number": "1.1.59",
  "title": "Basic Variables and Free Variables.",
  "body": " Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . They are not fixed by the system and may be chosen freely.   "
},
{
  "id": "subsec-linear-systems-27",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-27",
  "type": "Example",
  "number": "1.1.60",
  "title": "Infinitely Many Solutions.",
  "body": " Infinitely Many Solutions  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Let with . Then   Therefore, the solution set is   It is often useful to write this in parametric vector form:   "
},
{
  "id": "subsec-linear-systems-28",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-28",
  "type": "Theorem",
  "number": "1.1.61",
  "title": "Number of Solutions from the Row Echelon Form.",
  "body": " Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.    "
},
{
  "id": "subsec-linear-systems-31",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-31",
  "type": "Example",
  "number": "1.1.62",
  "title": "A Zero Row Does Not Automatically Mean Free Variables.",
  "body": " A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.  "
},
{
  "id": "subsec-linear-systems-33",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-33",
  "type": "Definition",
  "number": "1.1.63",
  "title": "Summary: Solving a Linear System.",
  "body": " Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.    "
},
{
  "id": "subsec-linear-systems-34",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-34",
  "type": "Example",
  "number": "1.1.64",
  "title": "Solving a Linear System from Start to Finish.",
  "body": " Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is   "
},
{
  "id": "subsec-linear-systems-37",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-37",
  "type": "Definition",
  "number": "1.1.65",
  "title": "Matrix-Vector Form and Vector Form of a Linear System.",
  "body": " Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as    "
},
{
  "id": "subsec-linear-systems-39",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-39",
  "type": "Example",
  "number": "1.1.66",
  "title": "Testing Linear Independence by a Homogeneous System.",
  "body": " Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.  "
},
{
  "id": "subsec-linear-systems-42",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-42",
  "type": "Definition",
  "number": "1.1.67",
  "title": "Rank of a Matrix.",
  "body": " Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .   "
},
{
  "id": "subsec-linear-systems-43",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-43",
  "type": "Example",
  "number": "1.1.68",
  "title": "Determining the Rank.",
  "body": " Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus   "
},
{
  "id": "subsec-linear-systems-44-2",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "Recognizing a Row Operation.",
  "body": " Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.    "
},
{
  "id": "subsec-linear-systems-44-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "Is This Row Echelon Form?",
  "body": " Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.    "
},
{
  "id": "subsec-linear-systems-44-4",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "Pivot Columns and Free Variables.",
  "body": " Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.    "
},
{
  "id": "subsec-linear-systems-44-5",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "Unique Solution or Infinitely Many?",
  "body": " Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.    "
},
{
  "id": "subsec-linear-systems-44-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "Reading a Reduced Row Echelon Form.",
  "body": " Reading a Reduced Row Echelon Form   Consider What is the solution vector?      Incorrect. The entries on the right-hand side are read off directly.     Correct. In reduced row echelon form, the solution can be read off directly.     Incorrect. The order of the coordinates matters.    The system has no solution.  Incorrect. There is no contradictory row.    "
},
{
  "id": "section-determinants-inverse-matrices",
  "level": "1",
  "url": "section-determinants-inverse-matrices.html",
  "type": "Section",
  "number": "1.2",
  "title": "Determinants and Inverse Matrices",
  "body": " Determinants and Inverse Matrices  Placeholder section for determinants and inverse matrices.  "
},
{
  "id": "section-eigenvalues-eigenvectors",
  "level": "1",
  "url": "section-eigenvalues-eigenvectors.html",
  "type": "Section",
  "number": "1.3",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  Placeholder section for eigenvalues and eigenvectors.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
