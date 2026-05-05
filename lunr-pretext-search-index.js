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
  "body": " Vectors, Matrices and Linear Systems of Equations   In this section, we learn the basic notions underlying linear algebra: vectors, matrices and linear systems of equations. Many of the later concepts of linear algebra build on these elementary objects and the operations defined on them.    Brief reminder: vectors   In physics, many real-world quantities—such as force, velocity, or displacement—cannot be fully described by a single number. For example, if you apply a force to push a box, the outcome depends not only on how hard you push (the magnitude) but also on the direction in which you are pushing.  To capture both magnitude and direction simultaneously, we use mathematical objects called vectors. This concept extends naturally beyond physical space into abstract mathematics, allowing us to handle multi-dimensional spaces and systems.    Vector   A vector of size is an ordered tuple of real numbers. The set of all vectors of size is denoted by . A vector is commonly written as or in column form as     Let us look at a concrete numerical representation of a vector in three-dimensional space.   A Vector in  An example of a vector in is    In and , vectors can be visualized as arrows in Euclidean space. In this geometric interpretation, a vector has a direction and a length, but it is not tied to a fixed starting point. A particularly useful representative is the position vector that starts at the origin.  At the same time, the algebraic point of view is more general: a vector is determined by its components. The geometric picture is very helpful in two and three dimensions, but the coordinate description remains meaningful in arbitrary dimension.  To make vectors useful, we need mathematical rules for how to combine them. The two most fundamental operations are adding two vectors and multiplying a vector by a real number.   Vector Operations   Let and let . The sum of two vectors of the same size and the scalar multiple of a vector are defined component-wise.    Addition  The sum of and is     Scalar Multiplication  The scalar multiple of by is        Calculating Sums and Scalar Multiples  Let and be vectors in .  Their sum is   If we scale by , we obtain     Resultant Force on a Mechanical Component  Suppose two forces act on a component in the plane:   The total force is obtained by vector addition:   Thus, the component experiences a resultant force with horizontal component and vertical component .    Scaling a Force Vector  Suppose a force acting on a component is represented by   If the same force is applied with twice the intensity, the new force vector is   This illustrates scalar multiplication: all components are multiplied by the same scalar, so the direction remains the same while the magnitude changes.    Interactive: Vector Addition     Interactive: Scalar Multiplication    Having established these basic arithmetic operations, a special vector arises naturally when we scale any vector by zero or subtract a vector from itself.   Zero Vector   The zero vector in is the vector whose components are all equal to zero. It is denoted by and has the form     Just like ordinary numbers, vector operations satisfy several basic algebraic laws.   Laws of Vector Arithmetic   For all vectors and all scalars , the following rules hold.   Associativity of Addition:   Commutativity of Addition:   Neutral Element:   Inverse Element:   Left Distributivity:   Right Distributivity:   Associativity of Scalar Multiplication:   Multiplication by One:      When working with several vectors, we often want to build new vectors from those already given. The most natural way to do this is to scale the vectors and then add them. In this way, we can describe how a vector can be assembled from a collection of basic directions.  This idea is fundamental in linear algebra. It helps us answer questions such as: Can a given vector be generated from other vectors? Do several vectors together describe all directions in a space? And does one of the vectors contribute genuinely new information, or can it already be obtained from the others?   Linear Combination   Let and let . A vector of the form is called a linear combination of the vectors .     A Linear Combination in  Consider the vectors   Then   Hence, is a linear combination of and .   Linear combinations tell us how new vectors can be generated from a given collection of vectors. This naturally leads to the question of whether all vectors in the collection are really needed.  Indeed, it may happen that one of the vectors can already be written as a linear combination of the others. In that case, it does not contribute a genuinely new direction. To distinguish between such redundant situations and genuinely different directions, we introduce the concept of linear independence.   Linear Independence and Basis   Vectors are called linearly independent if the equation has only the trivial solution .  A basis of is a tuple of linearly independent vectors in . In that case, every vector in can be written uniquely as a linear combination of the basis vectors.     Linear dependence and linear independence  This graphic visualizes the concept of linear dependence and linear independence.       A Counterexample in  Consider the vectors   Since , one vector is a scalar multiple of the other. Therefore, the vectors are not linearly independent. Indeed: so we have found a non-trivial solution to the equation    The most intuitive example of a basis is given by the standard coordinate axes.   Standard Basis in  The vectors are linearly independent.  Indeed, the equation becomes so necessarily and .  Hence, is a basis of . This means that every vector in can be written uniquely as a linear combination of and .    Three Linearly Independent Vectors in  Consider the vectors   To test linear independence, we consider   This gives so .  Therefore, the three vectors are linearly independent.    A Counterexample with Three Vectors in  Consider the vectors   Since the vector is a linear combination of the other two.  Hence, the three vectors are not linearly independent.   Besides combining vectors algebraically, we also want to measure geometric quantities such as length, distance, and angle. These are based on the scalar product.   Scalar Product, Norm, Distance, and Angle     Scalar Product  For vectors , the scalar product is defined by     Norm  The norm of is its length:     Distance  The distance between and is     Angle  For two non-zero vectors and , the angle between them is defined by     Orthogonality  Two vectors and are called orthogonal if       The formula for the norm is a direct generalization of the Pythagorean theorem. In two dimensions, a vector forms the hypotenuse of a right triangle whose legs have lengths and . Hence, . The same idea extends to higher dimensions.   Visualizing the Norm via the Pythagorean Theorem   A right-angled triangle formed by a vector and its components, with squares drawn on each side to geometrically illustrate that the square of the norm equals the sum of the squares of the components.      Lengths and Orthogonality  Consider the vectors and .  The norm of is   Their scalar product is   Since the scalar product is zero, the vectors are orthogonal.    A State Vector for Monitoring a Technical System  In engineering applications, vectors are often used to represent system states rather than geometric arrows. For example, the operating condition of a motor might be described by the vector where the components represent, for instance, a temperature deviation, a vibration level, and a current deviation.  Another operating condition may be represented by   The distance between the two states is   This shows that vectors in are not only geometric objects; they can also encode measurements and describe the state of a technical system.    Check Your Understanding   Identifying Orthogonal Vectors   Which of the following vectors is orthogonal to ?      Incorrect. The scalar product is , not zero.     Correct! The scalar product is .     Incorrect. The scalar product is , not zero.     Incorrect. The scalar product is , not zero.      Requirements for a Basis   True or False: Any two non-zero vectors in automatically form a basis of that space.     True  Incorrect. If the two vectors are scalar multiples of one another, then they are not linearly independent and therefore do not form a basis.    False  Correct! Two vectors in form a basis only if they are linearly independent.        Matrices   Matrices provide a convenient way to organize numerical data in rows and columns. They are used to describe systems of linear equations, to encode linear transformations, and to model input-output relations in engineering, economics, and the natural sciences.  In these notes, vectors are regarded as column vectors. Therefore, a vector in can also be viewed as an -matrix.    Matrix, Rows, and Columns   A matrix is a rectangular array of real numbers arranged in rows and columns. A matrix with rows and columns is called an -matrix . The set of all real -matrices is denoted by .  A matrix is written in the form   The entry in the -th row and -th column is denoted by . We also write .  The -th row of is and the -th column of is      An Example of a Matrix  The matrix has rows and columns, so .  Its entry in the first row and third column is . The second row is , and the first column is .    Equality of Matrices   Two matrices and are equal if they have the same size and if all corresponding entries are equal.  Thus, for and , we have exactly if for all and .     Arithmetic Operations on Matrices  We now introduce the basic arithmetic operations for matrices.   Addition and Scalar Multiplication   Let and be matrices of the same size in , and let .  The sum of and is defined component-wise by   The scalar multiple of by is defined by      Addition and Scalar Multiplication  Let   Then   Moreover,     Transpose   Let . The transpose of is the matrix obtained by interchanging rows and columns.  In other words, the entry in row and column of is . Thus,      Computing a Transpose  For the transpose is    Matrix multiplication is the most important operation involving matrices. At first sight, its definition may seem somewhat unintuitive. We therefore begin by defining the matrix product and illustrating it with an example. Later, in a range of applications, we will see that this definition is both natural and extremely useful.   Matrix Multiplication   Let and . Then the product is defined, because the number of columns of equals the number of rows of .  The product is an -matrix whose entries are given by   Equivalently, the entry is obtained as the scalar product of the -th row of and the -th column of .    Hence, the product is defined only if the inner dimensions agree: the number of columns of must equal the number of rows of .   Computing a Matrix Product  Let   Then    Since vectors are regarded as column vectors, matrix multiplication also allows us to multiply a matrix by a vector.   Matrix-Vector Product   Let and let . Interpreting as an -matrix, the product is defined and belongs to .     A Matrix-Vector Product  Let   Then    The matrix-vector product can also be interpreted in terms of the columns of the matrix. If (for example, if , then and ) and then Thus, is a linear combination of the columns of .   Modelling Population Movements  Consider a population distributed between suburban areas ( ) and urban areas ( ). Suppose that in one year, of the suburban population remains in the suburban area and moves to the urban area. Likewise, of the urban population remains in the urban area and moves to the suburban area.  If denotes the population vector at the beginning of the year, then the population vector at the end of the year is   This is an example of a matrix-vector product describing the state update of a system.    Sensor Calibration  Suppose a sensor system records two raw values collected in the vector   A calibration matrix transforms the raw measurements into corrected values:   Thus, matrices can be used to model calibration and coordinate transformations in engineering applications.     Special Matrices and Laws of Arithmetic   Special Matrices   Several classes of matrices occur frequently.    Zero Matrix  A matrix all of whose entries are equal to zero.    Square Matrix  A matrix with the same number of rows and columns.    Identity Matrix  A square matrix whose diagonal entries are equal to and whose off-diagonal entries are equal to . It is denoted by or, if the size matters, by .    Diagonal Matrix  A square matrix whose off-diagonal entries are all zero.    Triangular Matrix  A square matrix is called upper triangular if all entries below the main diagonal are zero, and lower triangular if all entries above the main diagonal are zero.    Symmetric Matrix  A square matrix satisfying .    Skew-Symmetric Matrix  A square matrix satisfying .       Examples of Special Matrices  The matrices are a zero matrix, an identity matrix, and a diagonal matrix, respectively.  Moreover, is upper triangular, and is symmetric.    Laws of Matrix Arithmetic   Let be matrices of suitable sizes, and let . Then the following rules hold.   Addition:  and , provided the matrices have the same size.  Neutral and Inverse Elements:  and .  Associativity of Multiplication:  , whenever all products are defined.  Identity Matrix:  and , where is the identity matrix of suitable size.  Distributivity:  and , whenever the products are defined.  Compatibility with Scalars:  .      Matrix Multiplication Is Not Commutative  In general, matrix multiplication is not commutative. This means that even if both products and are defined, they need not be equal.    A Counterexample to Commutativity  Let   Then   Hence, .       Linear Systems and the Gauss--Jordan Method   Systems of linear equations occur throughout mathematics, science, and engineering. They arise whenever several unknown quantities are linked by linear relations, for example in balance equations, circuit equations, calibration problems, or interpolation tasks.  Our goal is to solve such systems systematically. The key idea is to replace a given system by simpler equivalent systems whose solution sets remain unchanged. This leads to the Gauss algorithm and, as a further refinement, to the Gauss-Jordan method.  Throughout this section, it is important to distinguish carefully between four different objects. The linear system is the mathematical problem we want to solve. Its augmented coefficient matrix is a compact way of writing this problem. The solution set is the set of all vectors that satisfy the system. Finally, the Gauss and Gauss-Jordan methods are procedures that transform the matrix without changing the solution set of the underlying system.    Linear System and Augmented Coefficient Matrix   A system of linear equations with equations and unknowns is a system of the form   Its augmented coefficient matrix is      A Linear and a Non-Linear System  Consider the system This is a linear system. Its augmented coefficient matrix is   In contrast, the system is not linear, because the term is a product of unknowns.    A Solution and a Solution Set  Consider the linear system   The vector is a solution , because its components satisfy both equations:   In this example, there is only one solution. Therefore the solution set is the set   More generally, the solution set of a linear system may contain no vector, exactly one vector, or infinitely many vectors.    Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.     Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.     Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.    Why Row Operations Preserve the Solution Set  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is exactly the same pair of equations, only written in a different order. Therefore the solution set does not change.  After multiplying the first row by , we obtain The first equation is equivalent to the original first equation, because dividing by recovers it. Hence the set of solutions is again the same.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still     Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.    This result is the foundation of the elimination methods that follow. We simplify a linear system step by step until its structure becomes transparent.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.  The notions pivot element and pivot position are used only for matrices that are in row echelon form. The pivot position is the position in the matrix at which a pivot element occurs, that is, the row-column position of the first non-zero entry of a non-zero row.     A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.    A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.    A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.    Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is    In general, a given system is not initially in row echelon form. The Gauss algorithm transforms it into such a form.   Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.      Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. We will later use exactly this information to analyze the solution set of the corresponding linear system.   Row echelon form is already sufficient to analyze the system and to solve it by back substitution. We can also continue the reduction process further.  The difference between the two methods is simple: in the Gauss algorithm we create zeros below the pivots, while in the Gauss--Jordan method we continue until there are also zeros above the pivots.   Gauss-Jordan Method   The Gauss-Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.     Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes   We now eliminate the entry above this pivot: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus we have reached reduced row echelon form:    The position of the pivots tells us a great deal about the solvability of a system. We now derive the basic possibilities systematically from row echelon form.   A Pivot in the Augmented Column Means No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Here the pivot lies in the augmented column, that is, in the rightmost column. Therefore the system is inconsistent and has no solution.    If Every Variable Column Has a Pivot, the Solution Is Unique  Consider the row echelon form   The rightmost column is not a pivot column, so the system is consistent. Moreover, every variable column contains a pivot. Thus each variable is determined by the equations, and no choice remains open.  From the last equation we obtain The second equation then gives and the first equation yields   Hence the solution set consists of exactly one vector:     Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . The system imposes no pivot equation that determines them directly. Therefore they are not restricted by the row echelon structure and may be chosen freely. For this reason, we can introduce parameters for them.     If Some Variable Columns Have No Pivot, Free Variables Appear  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Since is free, the system does not prescribe a fixed value for it. We therefore introduce a parameter and write Then   Therefore, the solution set is   Thus one free variable leads to infinitely many solutions.    Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.     These three cases can be remembered by three simple questions.   Is there a pivot in the rightmost column? Then the system is inconsistent.  Does every variable column contain a pivot? Then the solution is unique.  Is there a variable column without a pivot? Then there is a free variable, and therefore infinitely many solutions, provided the system is consistent.    A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.   Once the solvability question has been answered, there are two standard ways to determine the solution set.   Determining the Solution Set from Row Echelon Form by Back Substitution  Consider the row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is a free variable.  We begin with the last non-zero row. From we obtain   The second row gives Since is free, we write Substituting yields   The first row gives Substituting and , we obtain   Therefore, is the solution set.  This procedure is called back substitution : starting with the last pivot equation, we determine the basic variables step by step from bottom to top.    Determining the Solution Set from Reduced Row Echelon Form by Direct Reading  Consider the reduced row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is free.  Because the matrix is already in reduced row echelon form, each basic variable is isolated in its own row:   We may therefore read off the solution almost immediately. Let Then   Hence the solution set is   Compared with general row echelon form, reduced row echelon form has the advantage that the basic variables can be read off directly, without an additional back-substitution step.   We can now summarize the practical procedure for solving a linear system.   Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.      Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is    Linear systems can also be interpreted in terms of matrices and vectors. This point of view connects the theory of linear systems with vector arithmetic, linear combinations, and later with linear transformations.  In particular, a system of equations can be understood as the question whether a given vector can be written as a linear combination of the column vectors of a matrix.   Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as      A Linear System in Matrix-Vector Form  Consider the system   Its matrix-vector form is   If we denote the columns of the coefficient matrix by then the same system can be written in vector form as    The vector form is conceptually very important: solving the system means deciding whether can be represented as a linear combination of the column vectors of , and if so, in which way.   Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.   When working with matrices, it is often useful to measure how much independent information they contain. The elimination process already provides exactly the right notion for this purpose.  The number of pivots that remain after row reduction tells us how many independent rows or columns are present. This leads to the concept of rank, which later plays a central role in solvability questions and in the structure of solution sets.   Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .     Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus     Check Your Understanding   Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.      Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.      Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.      Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.      Reading a Reduced Row Echelon Form   Consider What is the solution vector?      Incorrect. The entries on the right-hand side are read off directly.     Correct. In reduced row echelon form, the solution can be read off directly.     Incorrect. The order of the coordinates matters.    The system has no solution.  Incorrect. There is no contradictory row.       "
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
  "body": "linear system augmented coefficient matrix solution set Gauss Gauss-Jordan methods "
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
  "type": "Example",
  "number": "1.1.43",
  "title": "A Solution and a Solution Set.",
  "body": " A Solution and a Solution Set  Consider the linear system   The vector is a solution , because its components satisfy both equations:   In this example, there is only one solution. Therefore the solution set is the set   More generally, the solution set of a linear system may contain no vector, exactly one vector, or infinitely many vectors.  "
},
{
  "id": "subsec-linear-systems-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-6",
  "type": "Definition",
  "number": "1.1.44",
  "title": "Solution Set of a Linear System.",
  "body": " Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.   "
},
{
  "id": "subsec-linear-systems-7",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-7",
  "type": "Definition",
  "number": "1.1.45",
  "title": "Elementary Row Operations and Row Equivalence.",
  "body": " Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.   "
},
{
  "id": "subsec-linear-systems-8",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-8",
  "type": "Example",
  "number": "1.1.46",
  "title": "Examples of the Elementary Row Operations.",
  "body": " Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.  "
},
{
  "id": "subsec-linear-systems-9",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-9",
  "type": "Example",
  "number": "1.1.47",
  "title": "Why Row Operations Preserve the Solution Set.",
  "body": " Why Row Operations Preserve the Solution Set  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is exactly the same pair of equations, only written in a different order. Therefore the solution set does not change.  After multiplying the first row by , we obtain The first equation is equivalent to the original first equation, because dividing by recovers it. Hence the set of solutions is again the same.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still   "
},
{
  "id": "subsec-linear-systems-10",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-10",
  "type": "Theorem",
  "number": "1.1.48",
  "title": "Row Equivalent Systems Have the Same Solution Set.",
  "body": " Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.   "
},
{
  "id": "subsec-linear-systems-12",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-12",
  "type": "Definition",
  "number": "1.1.49",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.  The notions pivot element and pivot position are used only for matrices that are in row echelon form. The pivot position is the position in the matrix at which a pivot element occurs, that is, the row-column position of the first non-zero entry of a non-zero row.   "
},
{
  "id": "subsec-linear-systems-13",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-13",
  "type": "Example",
  "number": "1.1.50",
  "title": "A Matrix in Row Echelon Form.",
  "body": " A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.  "
},
{
  "id": "subsec-linear-systems-14",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-14",
  "type": "Example",
  "number": "1.1.51",
  "title": "A Matrix in Reduced Row Echelon Form.",
  "body": " A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.  "
},
{
  "id": "subsec-linear-systems-15",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-15",
  "type": "Example",
  "number": "1.1.52",
  "title": "A Matrix That Is Not in Row Echelon Form.",
  "body": " A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.  "
},
{
  "id": "subsec-linear-systems-16",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-16",
  "type": "Example",
  "number": "1.1.53",
  "title": "Solving a System in Row Echelon Form.",
  "body": " Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is   "
},
{
  "id": "subsec-linear-systems-18",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-18",
  "type": "Definition",
  "number": "1.1.54",
  "title": "Gauss Algorithm.",
  "body": " Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.    "
},
{
  "id": "subsec-linear-systems-19",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-19",
  "type": "Example",
  "number": "1.1.55",
  "title": "Applying the Gauss Algorithm.",
  "body": " Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. We will later use exactly this information to analyze the solution set of the corresponding linear system.  "
},
{
  "id": "subsec-linear-systems-22",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-22",
  "type": "Definition",
  "number": "1.1.56",
  "title": "Gauss-Jordan Method.",
  "body": " Gauss-Jordan Method   The Gauss-Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.   "
},
{
  "id": "subsec-linear-systems-23",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-23",
  "type": "Example",
  "number": "1.1.57",
  "title": "Continuing the Example with Gauss--Jordan.",
  "body": " Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes   We now eliminate the entry above this pivot: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus we have reached reduced row echelon form:   "
},
{
  "id": "subsec-linear-systems-25",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-25",
  "type": "Example",
  "number": "1.1.58",
  "title": "A Pivot in the Augmented Column Means No Solution.",
  "body": " A Pivot in the Augmented Column Means No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Here the pivot lies in the augmented column, that is, in the rightmost column. Therefore the system is inconsistent and has no solution.  "
},
{
  "id": "subsec-linear-systems-26",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-26",
  "type": "Example",
  "number": "1.1.59",
  "title": "If Every Variable Column Has a Pivot, the Solution Is Unique.",
  "body": " If Every Variable Column Has a Pivot, the Solution Is Unique  Consider the row echelon form   The rightmost column is not a pivot column, so the system is consistent. Moreover, every variable column contains a pivot. Thus each variable is determined by the equations, and no choice remains open.  From the last equation we obtain The second equation then gives and the first equation yields   Hence the solution set consists of exactly one vector:   "
},
{
  "id": "subsec-linear-systems-27",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-27",
  "type": "Definition",
  "number": "1.1.60",
  "title": "Basic Variables and Free Variables.",
  "body": " Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . The system imposes no pivot equation that determines them directly. Therefore they are not restricted by the row echelon structure and may be chosen freely. For this reason, we can introduce parameters for them.   "
},
{
  "id": "subsec-linear-systems-28",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-28",
  "type": "Example",
  "number": "1.1.61",
  "title": "If Some Variable Columns Have No Pivot, Free Variables Appear.",
  "body": " If Some Variable Columns Have No Pivot, Free Variables Appear  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Since is free, the system does not prescribe a fixed value for it. We therefore introduce a parameter and write Then   Therefore, the solution set is   Thus one free variable leads to infinitely many solutions.  "
},
{
  "id": "subsec-linear-systems-29",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-29",
  "type": "Theorem",
  "number": "1.1.62",
  "title": "Number of Solutions from the Row Echelon Form.",
  "body": " Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.    "
},
{
  "id": "subsec-linear-systems-32",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-32",
  "type": "Example",
  "number": "1.1.63",
  "title": "A Zero Row Does Not Automatically Mean Free Variables.",
  "body": " A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.  "
},
{
  "id": "subsec-linear-systems-34",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-34",
  "type": "Example",
  "number": "1.1.64",
  "title": "Determining the Solution Set from Row Echelon Form by Back Substitution.",
  "body": " Determining the Solution Set from Row Echelon Form by Back Substitution  Consider the row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is a free variable.  We begin with the last non-zero row. From we obtain   The second row gives Since is free, we write Substituting yields   The first row gives Substituting and , we obtain   Therefore, is the solution set.  This procedure is called back substitution : starting with the last pivot equation, we determine the basic variables step by step from bottom to top.  "
},
{
  "id": "subsec-linear-systems-35",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-35",
  "type": "Example",
  "number": "1.1.65",
  "title": "Determining the Solution Set from Reduced Row Echelon Form by Direct Reading.",
  "body": " Determining the Solution Set from Reduced Row Echelon Form by Direct Reading  Consider the reduced row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is free.  Because the matrix is already in reduced row echelon form, each basic variable is isolated in its own row:   We may therefore read off the solution almost immediately. Let Then   Hence the solution set is   Compared with general row echelon form, reduced row echelon form has the advantage that the basic variables can be read off directly, without an additional back-substitution step.  "
},
{
  "id": "subsec-linear-systems-37",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-37",
  "type": "Definition",
  "number": "1.1.66",
  "title": "Summary: Solving a Linear System.",
  "body": " Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.    "
},
{
  "id": "subsec-linear-systems-38",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-38",
  "type": "Example",
  "number": "1.1.67",
  "title": "Solving a Linear System from Start to Finish.",
  "body": " Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is   "
},
{
  "id": "subsec-linear-systems-41",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-41",
  "type": "Definition",
  "number": "1.1.68",
  "title": "Matrix-Vector Form and Vector Form of a Linear System.",
  "body": " Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as    "
},
{
  "id": "subsec-linear-systems-42",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-42",
  "type": "Example",
  "number": "1.1.69",
  "title": "A Linear System in Matrix-Vector Form.",
  "body": " A Linear System in Matrix-Vector Form  Consider the system   Its matrix-vector form is   If we denote the columns of the coefficient matrix by then the same system can be written in vector form as   "
},
{
  "id": "subsec-linear-systems-44",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44",
  "type": "Example",
  "number": "1.1.70",
  "title": "Testing Linear Independence by a Homogeneous System.",
  "body": " Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.  "
},
{
  "id": "subsec-linear-systems-47",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-47",
  "type": "Definition",
  "number": "1.1.71",
  "title": "Rank of a Matrix.",
  "body": " Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .   "
},
{
  "id": "subsec-linear-systems-48",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-48",
  "type": "Example",
  "number": "1.1.72",
  "title": "Determining the Rank.",
  "body": " Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus   "
},
{
  "id": "subsec-linear-systems-49-2",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "Recognizing a Row Operation.",
  "body": " Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.    "
},
{
  "id": "subsec-linear-systems-49-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "Is This Row Echelon Form?",
  "body": " Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.    "
},
{
  "id": "subsec-linear-systems-49-4",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "Pivot Columns and Free Variables.",
  "body": " Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.    "
},
{
  "id": "subsec-linear-systems-49-5",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "Unique Solution or Infinitely Many?",
  "body": " Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.    "
},
{
  "id": "subsec-linear-systems-49-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-6",
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
  "body": " Determinants and Inverse Matrices   In this section, we will see that some matrices can be inverted leading to the matrix algebra. Also, we will learn about the determinant which helps us understand which matrices are invertible.    Inverse Matrices   In elementary algebra, an equation such as is solved by multiplying both sides by . In linear algebra, we seek an analogous idea for matrix equations of the form . This leads to the concept of an inverse matrix.  Not every matrix can be inverted. In this section, we introduce invertible matrices, compute inverses in simple cases, explain how inverses can be used to solve linear systems, and show how the Gauss--Jordan method can be extended to determine the inverse of a matrix.    Invertible Matrix and Inverse Matrix   Let be a square matrix of size . We say that is invertible or regular if there exists a matrix of the same size such that where denotes the identity matrix   The matrix is then called the inverse matrix of and is denoted by .     Checking an Inverse by Multiplication  Consider We claim that   To verify this, we compute   One also checks that . Therefore the given matrix is indeed the inverse of .   Remember that the identity matrix plays the same role in matrix multiplication that the number plays in ordinary multiplication. For every matrix we have and for every vector we have Thus, multiplying by leaves both matrices and vectors unchanged.  If is invertible and we want to solve then multiplying from the left by gives and therefore Thus, the inverse matrix plays the same role for matrix equations as division by a non-zero number does for scalar equations.   Solving a Linear System with an Inverse Matrix  We illustrate the idea with a simple linear system with The inverse of is   We postpone the explanation how to compute inverse matrices and simply check that the given matrix is indeed the inverse of . We compute Similarly,   Therefore, we may solve the system by multiplying from the left by : Hence the solution of the linear system is     Uniqueness of the Inverse   If a square matrix is invertible, then its inverse is unique.  Moreover, to verify that a matrix is the inverse of , it is enough to check one of the equations For square matrices, each of these identities already implies that the other one holds as well.    We first show uniqueness. Assume that and both satisfy Then Hence the inverse matrix is uniquely determined.  Now suppose that . Then is a right inverse of . For square matrices, this already implies that is invertible, and therefore the inverse is unique. Since is an inverse candidate and the inverse is unique, it follows that Consequently, The argument for the case is analogous.    At this point, it is natural to ask whether every square matrix is invertible. The answer is no.   A Matrix That Is Not Invertible  Consider Then   Suppose, for contradiction, that were invertible. Multiplying the equation from the left by would yield But this is false, since . Hence is not invertible.   For matrices there is a particularly simple formula for the inverse.   Inverse of a Matrix   Let Then is invertible if and only if In this case,     Consider the matrix Then   If , dividing by this number gives Hence   If , then . In particular, cannot have an inverse, because otherwise multiplying by from the left would imply , which is impossible unless all entries vanish simultaneously.     Solving a Linear System with the Inverse Matrix (continuation)  In we solved the linear system with using the inverse matrix . With the formula above we can compute which conincides with the inverse given above.    An Engineering Interpretation  In many engineering applications, a square matrix describes how input quantities produce measured outputs. For instance, in a calibration problem one may have where is the unknown input vector and is the measured output vector.  A concrete example arises in electrical engineering. Suppose that two unknown source signals contribute to the voltages measured by two sensors. Each sensor records a weighted combination of the two source signals, because its position and construction determine how strongly it reacts to each source. If contains the unknown source intensities and the measured sensor voltages, then the relation between sources and measurements can be written in the form The entries of the matrix describe how strongly each source influences each sensor.  If is invertible, then the source intensities can be reconstructed uniquely from the measurements by If is not invertible, then this reconstruction is impossible in general: different source intensities may lead to the same sensor data, or some measurement vectors may not be attainable at all.   For larger matrices, explicit formulas for computing the inverse become impractical. Instead, we compute inverses systematically by an extension of the Gauss--Jordan method.   Computing the Inverse by the Gauss-Jordan Method   Let be an matrix. Form the augmented matrix Apply elementary row operations until reduced row echelon form is reached.  There are two possible outcomes.    If the result has the form then is invertible and     If the left block cannot be transformed into , then is not invertible.       Computing an Inverse with the Gauß-Jordan Method  Consider the matrix We determine its inverse by augmenting with the identity matrix and applying row operations:   We first eliminate the entry above the pivot in the third column by replacing the second row with . This gives   Next, we eliminate the entry above the pivot in the second column by replacing the first row with . We obtain   The left block is now the identity matrix. Hence is invertible, and the right block is the inverse:    Invertible matrices are important because they are precisely the matrices for which a system of linear equations can be solved uniquely for every right-hand side. They describe situations in which no information is lost and every output is produced by exactly one input. The following theorem collects several equivalent ways of recognizing this fundamental property and, in particular, makes the connection between invertibility and the solvability of linear systems completely explicit.   Equivalent Characterizations of Invertibility   Let be an matrix, and let be the linear map defined by Then the following statements are equivalent.   is invertible.  There exists a matrix such that .  There exists a matrix such that .  is invertible.  The columns of are linearly independent.  .  The homogeneous system has only the trivial solution .  For every , the system has a solution.  For every , the system has a unique solution.     Orthogonal matrices form a particularly important class of invertible matrices. They occur naturally whenever coordinates are rotated or reflected, and they are especially convenient because their inverse can be obtained simply by taking the transpose.   Orthogonal Matrix   A square matrix is called orthogonal if     Orthogonal matrices are a particularly important class of invertible matrices. Indeed, if , then is an inverse of , so    A Rotation Matrix  Consider the matrix Its transpose is   Multiplying the two matrices gives   Hence is orthogonal. This matrix describes a rotation in the plane. The name rotation matrix comes from the fact that multiplying a vector in the plane by this matrix turns its direction by the angle while preserving its length. Such matrices play an important role in mechanics, robotics, and computer graphics.    Check Your Understanding   Identifying an Invertible Matrix   Which of the following matrices is invertible?           Incorrect. The second row is twice the first row, so the rows are linearly dependent and the matrix is not invertible.           Correct! Its determinant is , which is not zero, so the matrix is invertible.           Incorrect. This matrix has a zero row, so its determinant is zero and it is not invertible.           Incorrect. The second row is times the first row, so the matrix is not invertible.       Checking an Inverse   True or False: For square matrices, if , then is the inverse of .     True  Correct! For square matrices, one of the equations or already implies the other, so .    False  Incorrect. For square matrices, checking just one of the equations is enough.      Solving a System with an Inverse Matrix   Suppose and What is the solution of ?           Incorrect. The solution is obtained by computing , not by copying the right-hand side.           Correct! We have            Incorrect. Check the matrix-vector multiplication carefully.           Incorrect. This is not the result of multiplying by .       Orthogonal Matrices   True or False: If a square matrix satisfies , then .     True  Correct! This is exactly the defining property of an orthogonal matrix.    False  Incorrect. If , then is the inverse of .      The Gauß-Jordan Method   When using the Gauß-Jordan method to compute the inverse of a square matrix , which augmented matrix do we start with?      Incorrect. The second block must be the identity matrix.     Correct! We row reduce until the left block becomes ; then the right block is .     Incorrect. The matrix must be placed in the left block.     Incorrect. The Gauß-Jordan method starts with , not with its transpose.        Determinants   We have seen that some square matrices are invertible, others are not. In this section we introduce the determinant of a matrix. This number helps us decide whether a matrix is invertible, and it also has a geometric meaning. In dimension two, the determinant measures an oriented area, and in dimension three, it measures an oriented volume.  We begin with determinants of - and -matrices, where explicit formulas are available. After that, we state the basic properties that characterize determinants for arbitrary square matrices and collect some important calculation rules.    Area of a Parallelogram  Consider the matrix Its columns are the vectors These two vectors span a parallelogram in the plane.  In the picture below, we translate this parallelogram into a surrounding rectangle. Translation does not change area. The rectangle has width and height . Hence its area is   The four corner regions are right triangles. Their total area is Therefore the area of the parallelogram is   Now expand the product: So    The two halves of cancel the full term , and the two halves of cancel the full term . Thus only remains. Hence   For this matrix, the determinant is Thus the determinant gives the area of the parallelogram spanned by the two column vectors.   A translated copy of the parallelogram spanned by the columns of , embedded in a rectangle.      Determinant of a -Matrix   Let be a -matrix. We define the determinant of by   Thus, the determinant of a -matrix is the difference of the product of the entries on the main diagonal and the product of the entries on the anti-diagonal.  Geometrically, computes the oriented area of the parallelogram spanned by the columns of .     Determinant, Area, and Sign  Consider We compute   The absolute values of the determinants are equal, so the corresponding parallelograms have the same area. The sign distinguishes the orientation. A positive determinant and a negative determinant correspond to opposite orientations of the column vectors.    Determinant of a -Matrix   Let be a -matrix. Then its determinant is defined by   This formula can be remembered using Sarrus' rule .   A diagram illustrating Sarrus' rule by repeating the first two columns of a 3 by 3 matrix and tracing the three positive (blue) and three negative (red) diagonals.         Using Sarrus' Rule  Let Then   Hence    Determinants of -matrices also have a geometric interpretation. If the columns of a matrix are the vectors , then is the oriented volume of the parallelepiped spanned by .   Visualization of a parallelepiped generated by three vectors       Volume Change Under a Linear Map  In engineering applications, matrices often represent linear transformations of space. If a matrix maps the unit cube to a parallelepiped, then the factor by which volumes are scaled is .  For example, if , then every small volume element is doubled. If , then the volume is still doubled, but the orientation is reversed.   In dimensions and , the determinant can still be written down by explicit formulas. Beginning with dimension , however, these formulas become so complicated that they are of little conceptual value. Rather than studying such formulas in general, we take a different point of view: we use the following theorem as the definition of the determinant in arbitrary dimension. It asserts that for every , there exists a unique map on -matrices satisfying the fundamental properties that a determinant should have.   Axiomatic Definition of the Determinant   For every , there exists a unique map with the following properties.    The determinant is multilinear , that is, it is compatible with sums and scalar multiplication in each column.    The determinant is alternating , that is, interchanging two columns changes the sign.    The determinant is normalized by       Beyond theoretically guaranteeing the existence of determinants for matrices of dimension 4 or higher, this theorem also gives us more information on the behaviour of the determinant in small dimensions:   Scaling a Matrix  Let be a -matrix with . We determine .  If the columns of are , then the columns of are . By multilinearity, Therefore    While determinants are cumbersome to compute in general, certain calculation rules make the computation easier in some situations:   Calculation Rules for Determinants   Let and be -matrices.    The determinant is multiplicative:     The determinant does not change under transposition:     If is triangular, then its determinant is the product of the diagonal entries:       These rules are very useful in practice. In particular, the formula for triangular matrices allows us to compute many determinants immediately.   Determinants of Triangular Matrices  For we have   For we obtain    One has to be careful with sums of matrices. In general, The determinant behaves well with respect to matrix multiplication, but not with respect to matrix addition.   Criteria for a Matrix to be Invertible   Let be an -matrix. Then the following statements are equivalent.   is invertible.  There exists an -matrix with .  There exists an -matrix with .  is invertible.  The columns of are linearly independent.  .  The homogeneous linear system has only the trivial solution.  For every , the linear system has a solution.  For every , the linear system has a unique solution.  .     In particular, a square matrix is invertible exactly if its determinant is non-zero. This gives a simple numerical criterion for invertibility.   Solvability for Arbitrary Right-Hand Sides  Consider We want to determine for which values of the system has a solution for every .  By the theorem above, this is equivalent to being invertible, and hence equivalent to   We compute   Therefore Hence the system has a solution for every right-hand side exactly for     Cramer's Rule for -Matrices   Let be a -matrix with , and let Then the unique solution of is given by with     Cramer's rule gives an explicit solution formula for small systems. For larger systems, Gaussian elimination is usually more efficient.   Check Your Understanding    Let What is ?      Incorrect. The determinant is not the sum of all entries.     Correct. We have .     Incorrect. Use the rule main diagonal minus anti-diagonal.     Incorrect. Recompute the two products carefully.       Let Which statement is true?     and the orientation is positive.  Incorrect. The determinant is negative.    and the area of the parallelogram is .  Correct. The absolute value gives the area, while the sign gives the orientation.    and the area of the parallelogram is .  Incorrect. An area is non-negative; the sign refers to orientation.    and the area of the parallelogram is .  Incorrect. Compute the determinant directly.       Let be a -matrix with . What is ?      Incorrect. For a -matrix, the determinant scales with the third power.     Correct. We have .     Incorrect. The factor is , not .    It cannot be determined.  Incorrect. The determinant rules give enough information.       For which value of is the matrix not invertible?      Incorrect. Set the determinant equal to zero.     Correct. We have , so the determinant is zero exactly for .     Incorrect. Then the determinant is .    The matrix is invertible for every .  Incorrect. A square matrix is not invertible when its determinant is zero.       Let What is ?      Incorrect. The matrix is triangular, so multiply all diagonal entries including the sign.     Incorrect. One diagonal factor is missing.     Correct. Since is upper triangular, .     Incorrect. A triangular matrix has determinant zero only if one diagonal entry is zero.       "
},
{
  "id": "section-determinants-inverse-matrices-3-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Invertible Matrix and Inverse Matrix.",
  "body": " Invertible Matrix and Inverse Matrix   Let be a square matrix of size . We say that is invertible or regular if there exists a matrix of the same size such that where denotes the identity matrix   The matrix is then called the inverse matrix of and is denoted by .   "
},
{
  "id": "section-determinants-inverse-matrices-3-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "Checking an Inverse by Multiplication.",
  "body": " Checking an Inverse by Multiplication  Consider We claim that   To verify this, we compute   One also checks that . Therefore the given matrix is indeed the inverse of .  "
},
{
  "id": "example-inverse-lgs",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#example-inverse-lgs",
  "type": "Example",
  "number": "1.2.3",
  "title": "Solving a Linear System with an Inverse Matrix.",
  "body": " Solving a Linear System with an Inverse Matrix  We illustrate the idea with a simple linear system with The inverse of is   We postpone the explanation how to compute inverse matrices and simply check that the given matrix is indeed the inverse of . We compute Similarly,   Therefore, we may solve the system by multiplying from the left by : Hence the solution of the linear system is   "
},
{
  "id": "section-determinants-inverse-matrices-3-8",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-8",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "Uniqueness of the Inverse.",
  "body": " Uniqueness of the Inverse   If a square matrix is invertible, then its inverse is unique.  Moreover, to verify that a matrix is the inverse of , it is enough to check one of the equations For square matrices, each of these identities already implies that the other one holds as well.    We first show uniqueness. Assume that and both satisfy Then Hence the inverse matrix is uniquely determined.  Now suppose that . Then is a right inverse of . For square matrices, this already implies that is invertible, and therefore the inverse is unique. Since is an inverse candidate and the inverse is unique, it follows that Consequently, The argument for the case is analogous.   "
},
{
  "id": "section-determinants-inverse-matrices-3-10",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-10",
  "type": "Example",
  "number": "1.2.5",
  "title": "A Matrix That Is Not Invertible.",
  "body": " A Matrix That Is Not Invertible  Consider Then   Suppose, for contradiction, that were invertible. Multiplying the equation from the left by would yield But this is false, since . Hence is not invertible.  "
},
{
  "id": "section-determinants-inverse-matrices-3-12",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-12",
  "type": "Theorem",
  "number": "1.2.6",
  "title": "Inverse of a <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrix.",
  "body": " Inverse of a Matrix   Let Then is invertible if and only if In this case,     Consider the matrix Then   If , dividing by this number gives Hence   If , then . In particular, cannot have an inverse, because otherwise multiplying by from the left would imply , which is impossible unless all entries vanish simultaneously.   "
},
{
  "id": "section-determinants-inverse-matrices-3-13",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-13",
  "type": "Example",
  "number": "1.2.7",
  "title": "Solving a Linear System with the Inverse Matrix (continuation).",
  "body": " Solving a Linear System with the Inverse Matrix (continuation)  In we solved the linear system with using the inverse matrix . With the formula above we can compute which conincides with the inverse given above.  "
},
{
  "id": "section-determinants-inverse-matrices-3-14",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-14",
  "type": "Example",
  "number": "1.2.8",
  "title": "An Engineering Interpretation.",
  "body": " An Engineering Interpretation  In many engineering applications, a square matrix describes how input quantities produce measured outputs. For instance, in a calibration problem one may have where is the unknown input vector and is the measured output vector.  A concrete example arises in electrical engineering. Suppose that two unknown source signals contribute to the voltages measured by two sensors. Each sensor records a weighted combination of the two source signals, because its position and construction determine how strongly it reacts to each source. If contains the unknown source intensities and the measured sensor voltages, then the relation between sources and measurements can be written in the form The entries of the matrix describe how strongly each source influences each sensor.  If is invertible, then the source intensities can be reconstructed uniquely from the measurements by If is not invertible, then this reconstruction is impossible in general: different source intensities may lead to the same sensor data, or some measurement vectors may not be attainable at all.  "
},
{
  "id": "section-determinants-inverse-matrices-3-16",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-16",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "Computing the Inverse by the Gauss-Jordan Method.",
  "body": " Computing the Inverse by the Gauss-Jordan Method   Let be an matrix. Form the augmented matrix Apply elementary row operations until reduced row echelon form is reached.  There are two possible outcomes.    If the result has the form then is invertible and     If the left block cannot be transformed into , then is not invertible.     "
},
{
  "id": "example-gauss-jordan-inverse-3x3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#example-gauss-jordan-inverse-3x3",
  "type": "Example",
  "number": "1.2.10",
  "title": "Computing an Inverse with the Gauß-Jordan Method.",
  "body": " Computing an Inverse with the Gauß-Jordan Method  Consider the matrix We determine its inverse by augmenting with the identity matrix and applying row operations:   We first eliminate the entry above the pivot in the third column by replacing the second row with . This gives   Next, we eliminate the entry above the pivot in the second column by replacing the first row with . We obtain   The left block is now the identity matrix. Hence is invertible, and the right block is the inverse:   "
},
{
  "id": "section-determinants-inverse-matrices-3-19",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-19",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "Equivalent Characterizations of Invertibility.",
  "body": " Equivalent Characterizations of Invertibility   Let be an matrix, and let be the linear map defined by Then the following statements are equivalent.   is invertible.  There exists a matrix such that .  There exists a matrix such that .  is invertible.  The columns of are linearly independent.  .  The homogeneous system has only the trivial solution .  For every , the system has a solution.  For every , the system has a unique solution.    "
},
{
  "id": "section-determinants-inverse-matrices-3-21",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-21",
  "type": "Definition",
  "number": "1.2.12",
  "title": "Orthogonal Matrix.",
  "body": " Orthogonal Matrix   A square matrix is called orthogonal if    "
},
{
  "id": "section-determinants-inverse-matrices-3-23",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-23",
  "type": "Example",
  "number": "1.2.13",
  "title": "A Rotation Matrix.",
  "body": " A Rotation Matrix  Consider the matrix Its transpose is   Multiplying the two matrices gives   Hence is orthogonal. This matrix describes a rotation in the plane. The name rotation matrix comes from the fact that multiplying a vector in the plane by this matrix turns its direction by the angle while preserving its length. Such matrices play an important role in mechanics, robotics, and computer graphics.  "
},
{
  "id": "exer-mc-invertible-matrix",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-invertible-matrix",
  "type": "Exercise",
  "number": "1.2.1.1",
  "title": "Identifying an Invertible Matrix.",
  "body": " Identifying an Invertible Matrix   Which of the following matrices is invertible?           Incorrect. The second row is twice the first row, so the rows are linearly dependent and the matrix is not invertible.           Correct! Its determinant is , which is not zero, so the matrix is invertible.           Incorrect. This matrix has a zero row, so its determinant is zero and it is not invertible.           Incorrect. The second row is times the first row, so the matrix is not invertible.     "
},
{
  "id": "exer-tf-one-sided-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-tf-one-sided-inverse",
  "type": "Exercise",
  "number": "1.2.1.2",
  "title": "Checking an Inverse.",
  "body": " Checking an Inverse   True or False: For square matrices, if , then is the inverse of .     True  Correct! For square matrices, one of the equations or already implies the other, so .    False  Incorrect. For square matrices, checking just one of the equations is enough.    "
},
{
  "id": "exer-mc-solve-with-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-solve-with-inverse",
  "type": "Exercise",
  "number": "1.2.1.3",
  "title": "Solving a System with an Inverse Matrix.",
  "body": " Solving a System with an Inverse Matrix   Suppose and What is the solution of ?           Incorrect. The solution is obtained by computing , not by copying the right-hand side.           Correct! We have            Incorrect. Check the matrix-vector multiplication carefully.           Incorrect. This is not the result of multiplying by .     "
},
{
  "id": "exer-tf-orthogonal-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-tf-orthogonal-inverse",
  "type": "Exercise",
  "number": "1.2.1.4",
  "title": "Orthogonal Matrices.",
  "body": " Orthogonal Matrices   True or False: If a square matrix satisfies , then .     True  Correct! This is exactly the defining property of an orthogonal matrix.    False  Incorrect. If , then is the inverse of .    "
},
{
  "id": "exer-mc-gauss-jordan-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-gauss-jordan-inverse",
  "type": "Exercise",
  "number": "1.2.1.5",
  "title": "The Gauß-Jordan Method.",
  "body": " The Gauß-Jordan Method   When using the Gauß-Jordan method to compute the inverse of a square matrix , which augmented matrix do we start with?      Incorrect. The second block must be the identity matrix.     Correct! We row reduce until the left block becomes ; then the right block is .     Incorrect. The matrix must be placed in the left block.     Incorrect. The Gauß-Jordan method starts with , not with its transpose.    "
},
{
  "id": "section-determinants-inverse-matrices-4-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-3",
  "type": "Example",
  "number": "1.2.14",
  "title": "Area of a Parallelogram.",
  "body": " Area of a Parallelogram  Consider the matrix Its columns are the vectors These two vectors span a parallelogram in the plane.  In the picture below, we translate this parallelogram into a surrounding rectangle. Translation does not change area. The rectangle has width and height . Hence its area is   The four corner regions are right triangles. Their total area is Therefore the area of the parallelogram is   Now expand the product: So    The two halves of cancel the full term , and the two halves of cancel the full term . Thus only remains. Hence   For this matrix, the determinant is Thus the determinant gives the area of the parallelogram spanned by the two column vectors.   A translated copy of the parallelogram spanned by the columns of , embedded in a rectangle.    "
},
{
  "id": "section-determinants-inverse-matrices-4-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-4",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Determinant of a <span class=\"process-math\">\\(2\\times 2\\)<\/span>-Matrix.",
  "body": " Determinant of a -Matrix   Let be a -matrix. We define the determinant of by   Thus, the determinant of a -matrix is the difference of the product of the entries on the main diagonal and the product of the entries on the anti-diagonal.  Geometrically, computes the oriented area of the parallelogram spanned by the columns of .   "
},
{
  "id": "section-determinants-inverse-matrices-4-5",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-5",
  "type": "Example",
  "number": "1.2.16",
  "title": "Determinant, Area, and Sign.",
  "body": " Determinant, Area, and Sign  Consider We compute   The absolute values of the determinants are equal, so the corresponding parallelograms have the same area. The sign distinguishes the orientation. A positive determinant and a negative determinant correspond to opposite orientations of the column vectors.  "
},
{
  "id": "section-determinants-inverse-matrices-4-6",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-6",
  "type": "Definition",
  "number": "1.2.17",
  "title": "Determinant of a <span class=\"process-math\">\\(3\\times 3\\)<\/span>-Matrix.",
  "body": " Determinant of a -Matrix   Let be a -matrix. Then its determinant is defined by   This formula can be remembered using Sarrus' rule .   A diagram illustrating Sarrus' rule by repeating the first two columns of a 3 by 3 matrix and tracing the three positive (blue) and three negative (red) diagonals.       "
},
{
  "id": "section-determinants-inverse-matrices-4-7",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-7",
  "type": "Example",
  "number": "1.2.19",
  "title": "Using Sarrus’ Rule.",
  "body": " Using Sarrus' Rule  Let Then   Hence   "
},
{
  "id": "parallelepipped",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#parallelepipped",
  "type": "Figure",
  "number": "1.2.20",
  "title": "",
  "body": " Visualization of a parallelepiped generated by three vectors     "
},
{
  "id": "section-determinants-inverse-matrices-4-10",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-10",
  "type": "Example",
  "number": "1.2.21",
  "title": "Volume Change Under a Linear Map.",
  "body": " Volume Change Under a Linear Map  In engineering applications, matrices often represent linear transformations of space. If a matrix maps the unit cube to a parallelepiped, then the factor by which volumes are scaled is .  For example, if , then every small volume element is doubled. If , then the volume is still doubled, but the orientation is reversed.  "
},
{
  "id": "section-determinants-inverse-matrices-4-12",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-12",
  "type": "Theorem",
  "number": "1.2.22",
  "title": "Axiomatic Definition of the Determinant.",
  "body": " Axiomatic Definition of the Determinant   For every , there exists a unique map with the following properties.    The determinant is multilinear , that is, it is compatible with sums and scalar multiplication in each column.    The determinant is alternating , that is, interchanging two columns changes the sign.    The determinant is normalized by      "
},
{
  "id": "section-determinants-inverse-matrices-4-14",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-14",
  "type": "Example",
  "number": "1.2.23",
  "title": "Scaling a Matrix.",
  "body": " Scaling a Matrix  Let be a -matrix with . We determine .  If the columns of are , then the columns of are . By multilinearity, Therefore   "
},
{
  "id": "section-determinants-inverse-matrices-4-16",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-16",
  "type": "Theorem",
  "number": "1.2.24",
  "title": "Calculation Rules for Determinants.",
  "body": " Calculation Rules for Determinants   Let and be -matrices.    The determinant is multiplicative:     The determinant does not change under transposition:     If is triangular, then its determinant is the product of the diagonal entries:      "
},
{
  "id": "section-determinants-inverse-matrices-4-18",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-18",
  "type": "Example",
  "number": "1.2.25",
  "title": "Determinants of Triangular Matrices.",
  "body": " Determinants of Triangular Matrices  For we have   For we obtain   "
},
{
  "id": "section-determinants-inverse-matrices-4-20",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-20",
  "type": "Theorem",
  "number": "1.2.26",
  "title": "Criteria for a Matrix to be Invertible.",
  "body": " Criteria for a Matrix to be Invertible   Let be an -matrix. Then the following statements are equivalent.   is invertible.  There exists an -matrix with .  There exists an -matrix with .  is invertible.  The columns of are linearly independent.  .  The homogeneous linear system has only the trivial solution.  For every , the linear system has a solution.  For every , the linear system has a unique solution.  .    "
},
{
  "id": "section-determinants-inverse-matrices-4-22",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-22",
  "type": "Example",
  "number": "1.2.27",
  "title": "Solvability for Arbitrary Right-Hand Sides.",
  "body": " Solvability for Arbitrary Right-Hand Sides  Consider We want to determine for which values of the system has a solution for every .  By the theorem above, this is equivalent to being invertible, and hence equivalent to   We compute   Therefore Hence the system has a solution for every right-hand side exactly for   "
},
{
  "id": "section-determinants-inverse-matrices-4-23",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-23",
  "type": "Theorem",
  "number": "1.2.28",
  "title": "Cramer’s Rule for <span class=\"process-math\">\\(2\\times 2\\)<\/span>-Matrices.",
  "body": " Cramer's Rule for -Matrices   Let be a -matrix with , and let Then the unique solution of is given by with    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-2",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-2",
  "type": "Exercise",
  "number": "1.2.2.1",
  "title": "",
  "body": "  Let What is ?      Incorrect. The determinant is not the sum of all entries.     Correct. We have .     Incorrect. Use the rule main diagonal minus anti-diagonal.     Incorrect. Recompute the two products carefully.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-3",
  "type": "Exercise",
  "number": "1.2.2.2",
  "title": "",
  "body": "  Let Which statement is true?     and the orientation is positive.  Incorrect. The determinant is negative.    and the area of the parallelogram is .  Correct. The absolute value gives the area, while the sign gives the orientation.    and the area of the parallelogram is .  Incorrect. An area is non-negative; the sign refers to orientation.    and the area of the parallelogram is .  Incorrect. Compute the determinant directly.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-4",
  "type": "Exercise",
  "number": "1.2.2.3",
  "title": "",
  "body": "  Let be a -matrix with . What is ?      Incorrect. For a -matrix, the determinant scales with the third power.     Correct. We have .     Incorrect. The factor is , not .    It cannot be determined.  Incorrect. The determinant rules give enough information.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-5",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-5",
  "type": "Exercise",
  "number": "1.2.2.4",
  "title": "",
  "body": "  For which value of is the matrix not invertible?      Incorrect. Set the determinant equal to zero.     Correct. We have , so the determinant is zero exactly for .     Incorrect. Then the determinant is .    The matrix is invertible for every .  Incorrect. A square matrix is not invertible when its determinant is zero.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-6",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-6",
  "type": "Exercise",
  "number": "1.2.2.5",
  "title": "",
  "body": "  Let What is ?      Incorrect. The matrix is triangular, so multiply all diagonal entries including the sign.     Incorrect. One diagonal factor is missing.     Correct. Since is upper triangular, .     Incorrect. A triangular matrix has determinant zero only if one diagonal entry is zero.    "
},
{
  "id": "section-eigenvalues-eigenvectors",
  "level": "1",
  "url": "section-eigenvalues-eigenvectors.html",
  "type": "Section",
  "number": "1.3",
  "title": "Eigenvalues, Diagonalization, and Quadratic Forms",
  "body": " Eigenvalues, Diagonalization, and Quadratic Forms   Our final section in Linear Algebra brings together three closely connected ideas. We begin with eigenvalues and eigenvectors , which capture the directions along which a matrix acts by pure scaling. We then use them to diagonalize matrices — a technique that dramatically simplifies the computation of matrix powers. Finally, we study quadratic forms , which describe how a symmetric matrix assigns a real value to each vector. Quadratic forms will reappear in Section 2.2, where they determine whether a critical point of a function is a minimum, a maximum, or a saddle point.    Eigenvalues and Eigenvectors   When a vector is multiplied by a square matrix, usually both the length and the direction will change. However, for some special non-zero vectors the effect is particularly simple: multiplication by the matrix changes only the size, while the direction remains the same. Such vectors are called eigenvectors, and the corresponding scaling factors are called eigenvalues.  Eigenvalues and eigenvectors play an important role in many applications. In mechanics they describe principal modes of deformation or vibration, in electrical engineering they appear in state-space models, and in data science they are used, for example, in principal component analysis. In this section we introduce the basic definitions, explain how eigenvalues can be computed, and discuss some first important examples.    Distinguished Directions of a Matrix  Consider the matrix and the vectors   We compute     The vector changes its direction under multiplication by . In contrast, keeps its direction and even remains unchanged, while keeps its direction and is stretched by the factor . The following graphics visualize these three cases.    The blue vector is mapped to the red vector . The direction changes.     The vector is unchanged by multiplication with . Hence , so is an eigenvector with eigenvalue .     The blue vector is mapped to the red vector . The direction stays the same, but the length doubles.   These pictures show that some vectors are mapped to scalar multiples of themselves when multiplied by You. This is exactly the phenomenon captured by the notion of eigenvalues and eigenvectors.    Eigenvalue and Eigenvector   Let be an -matrix. A non-zero vector is called an eigenvector of with eigenvalue  if     The equation means that multiplication by has the same effect on as multiplication by the scalar . Hence sends the vector to a vector parallel to .   Two Eigenvectors of a Matrix  For the matrix from the previous example, we have already seen that and Therefore is an eigenvector with eigenvalue , and is an eigenvector with eigenvalue .    Eigenspace   Let be an -matrix and let be an eigenvalue of . The set is called the eigenspace corresponding to .    The eigenspace contains all eigenvectors corresponding to and also the zero vector. The zero vector itself is never an eigenvector, because eigenvectors must be non-zero by definition.   Testing Whether a Given Vector Is an Eigenvector  Consider To test whether a vector is an eigenvector, we multiply it by and check whether the result is a scalar multiple of the original vector.  First, Hence is an eigenvector of with eigenvalue .  Next, This vector is not a scalar multiple of . Therefore is not an eigenvector of .   After having studied how to check whether a given vector is an eigenvector or not of a matrix, we next deal with the question how to find the eigenvectors to a given eigenvalue. To answer this question we will frame the problem of determining the eigenspace to a given eigenvalue as a linear system. This is the content of the following theorem.   Linear System for Eigenvectors   Let be an -matrix and let . Then the following statements are equivalent.     is an eigenvalue of .    The homogeneous linear system has a non-trivial solution.    In this case,     By definition, is an eigenvalue of if and only if there exists a non-zero vector such that Subtracting from both sides gives   Since , where is the identity matrix, this is equivalent to Thus is an eigenvalue exactly if the system has a non-trivial solution. The set of all solutions of this system is precisely the eigenspace .    This theorem is important because it turns an eigenvalue problem into a familiar problem from the previous section: solving a homogeneous linear system.   Finding the Eigenspace for a Given Eigenvalue  Again consider We show that is an eigenvalue and determine the corresponding eigenspace.  We have to solve that is, Since the augmented coefficient matrix is   Hence the system is equivalent to so with . Therefore Every non-zero vector in this eigenspace is an eigenvector corresponding to .   The eigenvalue is possible. In that case there exists a non-zero vector such that So is an eigenvalue exactly if the homogeneous system has a non-trivial solution. By the invertibility criteria from the previous section, this means that is not invertible.   Eigenvalues of an Upper Triangular Matrix  Consider the upper triangular matrix We determine its eigenvalues.  The number is an eigenvalue if and only if the system has a non-trivial solution. Now This matrix is still upper triangular.  For the system to have a non-trivial solution, the matrix must fail to have a pivot in every column. Since the diagonal entries are , , and , this happens exactly when at least one of them is zero. Hence are the eigenvalues of .    Eigenvalues of Triangular Matrices   Let be an upper or lower triangular -matrix. Then the eigenvalues of are exactly the diagonal entries of .    The matrix is again triangular, and its diagonal entries are obtained by subtracting from the diagonal entries of . A triangular matrix is invertible exactly if all diagonal entries are non-zero. Therefore is not invertible exactly when one of these diagonal entries is zero. By the previous theorem, this is equivalent to being an eigenvalue.    In practice, this theorem is very useful. For triangular matrices the eigenvalues can be read off immediately from the main diagonal, without any further calculation.  We have seen how to check if a given vector is an eigenvector of a matrix (how?). Also, we have seen how to find the eigenspace corresponding to a given eigenvalue (how?). Next, we will see how to find the eigenvalues of a matrix.   Characteristic Polynomial   Let be an -matrix. The polynomial is called the characteristic polynomial of .  A scalar is an eigenvalue of if and only if     By the theorem on eigenvectors, is an eigenvalue exactly if the homogeneous system has a non-trivial solution. By the invertibility criteria, this is equivalent to not being invertible. For square matrices this happens exactly when Hence the zeros of the characteristic polynomial are precisely the eigenvalues of .      This is where the determinant tools from the previous section become essential: to find eigenvalues, we first build the matrix and then compute its determinant. In other words, the new topic of eigenvalues builds directly on the determinant techniques from .    Computing Eigenvalues via the Characteristic Polynomial  Consider We determine the eigenvalues of .  The characteristic polynomial is Expanding gives   Therefore the eigenvalues are the zeros of this polynomial: Using the quadratic formula, we obtain Hence     Algebraic and Geometric Multiplicity   Let be an eigenvalue of the matrix .  If the characteristic polynomial contains the factor , but not the factor , then is called the algebraic multiplicity of .  The geometric multiplicity of is the maximum number of linearly independent vectors in the eigenspace .    The geometric multiplicity tells us how many linearly independent eigenvectors belong to an eigenvalue. It is always at least and never larger than the algebraic multiplicity.   A Repeated Eigenvalue  Consider We determine its eigenvalues and eigenvectors.  The characteristic polynomial is Thus is the only eigenvalue, and its algebraic multiplicity is .  To find the eigenspace, we solve Since we get the equation Hence All eigenvectors in are multiples of , so we can extract only one linearly independent eigenvector from this eigenspace. Therefore the geometric multiplicity is .  This example shows that algebraic and geometric multiplicity need not coincide.    A Rotation Matrix  Consider the matrix which describes a rotation by around the origin in the counter-clockwise direction.  Over the real numbers, this matrix has no eigenvectors. Indeed, a rotation by changes the direction of every non-zero real vector, so no non-zero vector can satisfy with .  Algebraically, the characteristic polynomial is This polynomial has no real zero, hence has no real eigenvalue.  Over the complex numbers, however, the equation has the solutions Thus the matrix has complex eigenvalues. This example illustrates that real matrices need not have real eigenvalues.     This example shows an important limitation: a real matrix need not have enough real eigenvalues and eigenvectors to be diagonalized over . When we study diagonalization in the next subsection, we will therefore pay attention to whether the characteristic polynomial actually has real zeros.    Engineering Interpretation  In many engineering models, a matrix describes how a system transforms states or forces. If is an eigenvector, then the action of the matrix on this state is especially simple: the state keeps its direction and is only scaled by .  For example, in a mechanical system an eigenvector may represent a preferred vibration mode, and the corresponding eigenvalue can be related to amplification or damping. In stress analysis, eigenvectors of a symmetric matrix describe principal directions, that is, directions in which no shear component appears. This is one reason why eigenvalues are fundamental in applied mathematics and engineering.    Powers of a Matrix and the Inverse Matrix   Let be an eigenvector of with eigenvalue .    For every ,     If is invertible, then and Hence is an eigenvalue of .      The first claim follows by repeated application of the relation . For example, The general case is proved in the same way by induction.  For the second claim, apply to the equation . This gives Since is invertible, the eigenvalue cannot be zero. Dividing by yields     We summarize the procedure for computing eigenvalues and eigenvectors.   Procedure for Determining Eigenvalues and Eigenvectors  Let be an -matrix.    Compute the characteristic polynomial     Determine the zeros of . These are the eigenvalues of .    For each eigenvalue , solve the homogeneous system to obtain the eigenspace .       Check Your Understanding   Check a Candidate Eigenvalue   Consider the matrix Decide whether is an eigenvalue of .    Study the homogeneous system . The value is an eigenvalue exactly if this system has a non-trivial solution.     Yes, because .  Incorrect. Computing gives a non-zero value, so the system has only the trivial solution.    No, because is invertible.  Correct. Since is invertible, the homogeneous system has only the trivial solution, so is not an eigenvalue.    Yes, because the trace of is greater than .  Incorrect. The trace alone does not decide whether a number is an eigenvalue.    No, because is not a diagonal entry of .  Incorrect. That criterion works only for triangular matrices, and this matrix is not triangular.      Powers Acting on an Eigenvector   Let be an eigenvector of the matrix with eigenvalue . Compute .      Incorrect. Repeated application multiplies by each time, so the factor is , not .     Correct. Applying four times multiplies the eigenvector by four times.     Incorrect. The expression can be simplified much further using the eigenvector property.     Incorrect. Vectors are not exponentiated in this way.      Find Eigenvalues and Eigenspaces   Determine the eigenvalues and eigenspaces of     We compute the characteristic polynomial: Factoring gives so the eigenvalues are and .  For , we solve This gives , hence   For , we solve This gives , so . Therefore      Interpretation for a Scaling Process   A matrix describes one step of a linear discrete-time model. Explain in your own words what it means for a non-zero state vector to be an eigenvector of . What is the effect of repeated application of the model on this state if the corresponding eigenvalue satisfies , , or ?     The state stays on the same line; it decays for , keeps constant magnitude for , and grows for .  Correct. Along an eigenvector direction, each step only rescales the state by .    The state rotates to a new direction each step; the size behaviour depends only on the trace of .  Incorrect. An eigenvector direction is preserved, and the relevant quantity is the eigenvalue, not the trace.    The state stays fixed whenever .  Incorrect. The state is fixed only in the special case .    The state becomes zero after one step whenever .  Incorrect. If , the state decays gradually; it does not become zero in one step unless .      Repeated Eigenvalue   Determine the characteristic polynomial, the algebraic multiplicity, and the geometric multiplicity of the eigenvalue of     First compute , then solve .     We have So the only eigenvalue is , with algebraic multiplicity .  Next we solve This gives , while is free. Hence so the geometric multiplicity is .       Diagonalization of Matrices   Powers of a Diagonal Matrix  Consider the diagonal matrix For any , its -th power is This follows immediately from matrix multiplication: each diagonal entry is raised to the power independently.   The example above shows why diagonal matrices are so attractive: their powers are immediate to compute. This raises a natural question: can we use this simple structure to compute powers of more general matrices?  The answer is yes, provided the matrix can be diagonalized , that is, written in the form with an invertible matrix and a diagonal matrix . As we will see, the columns of are eigenvectors of , and the diagonal entries of are the corresponding eigenvalues.   Diagonalizable Matrix   An matrix is called diagonalizable if there exists an invertible matrix and a diagonal matrix such that     If , then a simple induction gives since the intermediate factors cancel. Computing then reduces to computing , which is trivial.   Criterion for Diagonalizability   Let be an matrix.     is diagonalizable if and only if there exist linearly independent eigenvectors of .    If , then the columns of are linearly independent eigenvectors of , and the diagonal entries of are the corresponding eigenvalues.    If the characteristic polynomial of splits into linear factors over , then is diagonalizable if and only if for every eigenvalue , its algebraic multiplicity equals its geometric multiplicity.      For part (1), first assume that is diagonalizable, so for some invertible matrix . Multiplying by on the right gives . If denotes the -th column of and the corresponding diagonal entry of , then the -th column of reads . So the columns of are eigenvectors of . Because is invertible, these columns are linearly independent, so we obtain linearly independent eigenvectors.  Conversely, suppose that are linearly independent eigenvectors with corresponding eigenvalues . Form the matrix Then Since the columns of are linearly independent, is invertible. Multiplying on the right by gives , so is diagonalizable.  Part (2) follows from the identity . If denotes the -th column of and the corresponding diagonal entry of , then the -th column of reads . So each column of is an eigenvector with the matching eigenvalue.  For part (3), assume that the characteristic polynomial splits over . Then the sum of the algebraic multiplicities of all eigenvalues is . For each eigenvalue, the geometric multiplicity is at most the algebraic multiplicity. Hence equality for every eigenvalue is equivalent to having a total of linearly independent eigenvectors. By part (1), this is exactly the condition for diagonalizability.      The extra hypothesis in part (3) matters. For example, the rotation matrix from the previous subsection has no real eigenvalues, so it cannot be diagonalized over .   This criterion gives a practical recipe: compute all eigenvalues, determine their algebraic and geometric multiplicities, and check whether the multiplicities match. If they do — and if together we collect linearly independent eigenvectors — then is diagonalizable and we can form and directly from the eigenvectors and eigenvalues.   Computing a Power via Diagonalization  Let We want to compute for arbitrary . We are given that with   First, we compute using the inverse formula:   Now we use : Carrying out the multiplications:     Diagonalizing a Matrix  Find matrices and such that , where    Step 1: Characteristic polynomial. We compute Expanding along the second column (which has two zeros):    Step 2: Eigenvalues. The eigenvalues are (algebraic multiplicity 1) and (algebraic multiplicity 2).   Step 3: Eigenspaces. For , we solve : The free variable is , giving the eigenvector .  For , we solve : The free variables are and , giving two linearly independent eigenvectors The geometric multiplicity of is 2, matching the algebraic multiplicity.   Conclusion. Since both multiplicities match for every eigenvalue, is diagonalizable. Placing the eigenvectors as columns of and the corresponding eigenvalues on the diagonal of :     A Non-Diagonalizable Matrix  Consider The characteristic polynomial is , so the only eigenvalue is with algebraic multiplicity 2.  To find the eigenspace, we solve : The eigenspace is so the eigenspace provides only one linearly independent eigenvector. The geometric multiplicity of is 1, which is strictly less than the algebraic multiplicity 2. Therefore is not diagonalizable.    Diagonalizability of Symmetric Matrices   Let be a symmetric matrix (i.e. ). Then:     is always diagonalizable.    There exist pairwise orthogonal eigenvectors of . In particular, can be diagonalized by an orthogonal matrix , meaning .        This theorem is especially important for quadratic forms (the next subsection) and for applications in mechanics, where the stress and inertia tensors are represented by symmetric matrices.    Check Your Understanding   Check Diagonalizability   Determine whether the matrix is diagonalizable. If yes, find and . If no, explain why.    Compute the characteristic polynomial and check whether algebraic and geometric multiplicities agree.     The characteristic polynomial is So the only eigenvalue is , with algebraic multiplicity .  To find the eigenspace, solve This gives , while is free. Hence The geometric multiplicity is therefore .  Since the geometric multiplicity is smaller than the algebraic multiplicity, the matrix is not diagonalizable.     Diagonalize and Compute a Power   Diagonalize the matrix by finding matrices and with . Then compute .    Because is upper triangular, its eigenvalues are the diagonal entries. Then determine one eigenvector for each eigenvalue.    Since is upper triangular, its eigenvalues are and .  For , we solve which gives . So we may choose   For , we solve so . We may choose   Hence Since we obtain   Since and ,      Mode Decomposition in a Discrete Model   Suppose a discrete-time model satisfies and the initial state is Which statement about is correct?     ; the -component grows and the -component decays.  Correct. Each eigenvector component is scaled independently by the corresponding power of its eigenvalue.    ; the -component decays and the -component grows.  Incorrect. The eigenvalue belongs to , and belongs to .     Incorrect. The whole vector is not scaled by a single common factor; each eigenvector direction evolves separately.    for all , because eigenvectors do not change under repeated multiplication.  Incorrect. Eigenvectors keep their direction, but their lengths are multiplied by successive powers of the eigenvalue.        Quadratic Forms   A quadratic form is a function that maps a vector to a real number using only squared and mixed products of its components — no linear or constant terms appear. Quadratic forms arise naturally in many contexts: the kinetic energy of a mechanical system, the elastic energy stored in a deformed structure, and the local behaviour of a differentiable function near a critical point are all described by quadratic forms. The key tool for analysing them is the diagonalization of the underlying symmetric matrix.    Quadratic Form   A quadratic form is a map where is a symmetric matrix. The matrix is called the matrix of the quadratic form .     Every quadratic form can be uniquely represented by a symmetric matrix. If a non-symmetric matrix is given, we can replace it by the symmetric matrix without changing the quadratic form, since for all .     In engineering, quadratic forms often measure energy. For instance, if records two small displacements in a coupled spring system, then the elastic energy can have the form . Positive definiteness then means that every non-zero displacement stores positive energy, which is exactly what we expect from a stable configuration.    Expanding a Quadratic Form  Let The associated quadratic form is Observe that the coefficient of the mixed term is .    Definiteness of a Quadratic Form   Let be a symmetric matrix with associated quadratic form .     is positive definite if for all .     is positive semidefinite if for all .     is negative definite if for all .     is negative semidefinite if for all .     is indefinite if takes both positive and negative values.       Testing Definiteness by Inspection  We test the definiteness of three quadratic forms.  (a) . We evaluate at two points: Since takes both positive and negative values, it is indefinite .  (b) . Since , the sum is always non-negative. It is zero only when . Therefore is positive definite .  (c) . Here even though . Therefore is positive semidefinite .   Testing definiteness by trying specific values (as above) is fine for disproving positive definiteness, but not for proving it. The following two theorems give systematic criteria.   Diagonal Quadratic Forms as Model Cases  For a diagonal matrix , the quadratic form is In this case, the sign pattern of the coefficients already reveals the geometry.  (a) For , both coefficients are positive, so for every non-zero . The level line is an ellipse.    The level line is an ellipse.   (b) For , one coefficient is positive and one is negative. Hence the form is indefinite. The level line is a hyperbola.    The level line is a hyperbola.   (c) For , we have for all , but . So the form is positive semidefinite. The level set consists of two vertical lines.    For , the level set consists of the lines ; the dashed line corresponds to the zero level.   These diagonal examples motivate the general criterion below: once a symmetric matrix is orthogonally diagonalized, its quadratic form reduces to exactly this kind of expression.    Definiteness Criterion via Eigenvalues   Let be a symmetric matrix with eigenvalues (all real, by ).     is positive definite (resp. semidefinite) if and only if all eigenvalues satisfy (resp. ).     is negative definite (resp. semidefinite) if and only if all eigenvalues satisfy (resp. ).     is indefinite if and only if there exist both a positive and a negative eigenvalue.      By , there is an orthogonal matrix and a diagonal matrix such that .  Now take any vector and write it in the form . Then So the sign of the quadratic form is determined entirely by the signs of the eigenvalues.  If all eigenvalues are positive, then every term on the right-hand side is non-negative and at least one is positive whenever , so the quadratic form is positive definite. The semidefinite, negative definite, and negative semidefinite cases are analogous. If there are both positive and negative eigenvalues, then choosing along the corresponding coordinate axes produces both positive and negative values, so the form is indefinite.     Positive Definiteness from Eigenvalues  Consider Its characteristic polynomial is So the eigenvalues are and , both positive. By the eigenvalue criterion, is positive definite.    Indefiniteness from Mixed Eigenvalue Signs  Consider We compute Thus the eigenvalues are and . Since there is one positive and one negative eigenvalue, the matrix is indefinite.  This agrees with direct values of the quadratic form:     Sylvester's Criterion   Let be a symmetric matrix. Denote by the leading principal submatrix (the submatrix formed by the first rows and columns of ).     is positive definite if and only if      is negative definite if and only if In other words, the leading principal minors alternate in sign: , , , and so on.        Leading principal submatrices are the successive top-left blocks of the matrix: first , then , then , and so on.    Positive Definiteness via Sylvester's Criterion  Consider The leading principal submatrices are Their determinants are Since all leading principal minors are positive, is positive definite.    Negative Definiteness via Sylvester's Criterion  Consider We compute The leading principal minors alternate in sign, so Sylvester's criterion shows that is negative definite.      In practice, Sylvester's criterion is most useful when the eigenvalues are inconvenient to compute exactly. For a symmetric matrix, it gives a fast test for positive or negative definiteness using only determinants of smaller submatrices.    Connection to Local Extrema  Quadratic forms play a central role in the analysis of local extrema of functions . Near a critical point (where ), the Taylor expansion gives The second-order term is a quadratic form with the Hessian matrix :    If is positive definite, then is a strict local minimum.    If is negative definite, then is a strict local maximum.    If is indefinite, then is a saddle point.    This connection is developed in detail in Section 2.2 (Error Propagation, Taylor Expansion, and Extrema).    Principal Axes and the Geometry of Quadratic Forms  Since the matrix of a quadratic form is symmetric, it can be diagonalized by an orthogonal matrix: . Here we only use the basic idea of changing coordinates; a full general theory of change of basis is not needed yet. Substituting the coordinate change : In the new coordinates , the quadratic form has no mixed terms . The columns of (the eigenvectors of ) define the principal axes of the quadratic form.  Geometrically, the level sets are ellipses (positive definite case), hyperbolas (indefinite case), or degenerate shapes in between. The principal axes are exactly the axes of symmetry of these level curves.    After an orthogonal change of coordinates, the mixed term disappears and the level curve aligns with the principal axes and .      Check Your Understanding   Expand a Quadratic Form   Let Write out the quadratic form explicitly as a polynomial in .      Incorrect. The mixed term receives contributions from both off-diagonal entries.     Correct. The mixed coefficient is .     Incorrect. The sign of the mixed term is negative, not positive.     Incorrect. The squared terms and mixed term have been combined incorrectly.      Classify by Eigenvalues   Determine the eigenvalues of and use them to decide whether is positive definite, negative definite, or indefinite.     Negative definite  Incorrect. Both eigenvalues are positive, not negative.    Positive definite  Correct. The eigenvalues are and , so both are positive.    Indefinite  Incorrect. An indefinite matrix needs both a positive and a negative eigenvalue.    Negative semidefinite  Incorrect. The matrix has strictly positive eigenvalues.      Sylvester's Criterion for a Matrix   Apply Sylvester's criterion to determine whether is positive definite.    Compute , , and in turn.     The leading principal submatrices are   Their determinants are and   All three leading principal minors are positive. By Sylvester's criterion, the matrix is positive definite.     Classify a Critical Point   The function has a critical point at the origin with Hessian Is the origin a local minimum, a local maximum, or a saddle point?    Use Sylvester's criterion or compute the eigenvalues of the Hessian.    Let We apply Sylvester's criterion. The first leading principal minor is , while   So is not positive definite and not negative definite. In fact, it is positive semidefinite. Therefore the second-derivative test is inconclusive here: from the Hessian alone we cannot decide whether the origin is a local minimum, a local maximum, or a saddle point.      "
},
{
  "id": "section-eigenvalues-eigenvectors-3-3",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-3",
  "type": "Example",
  "number": "1.3.1",
  "title": "Distinguished Directions of a Matrix.",
  "body": " Distinguished Directions of a Matrix  Consider the matrix and the vectors   We compute     The vector changes its direction under multiplication by . In contrast, keeps its direction and even remains unchanged, while keeps its direction and is stretched by the factor . The following graphics visualize these three cases.    The blue vector is mapped to the red vector . The direction changes.     The vector is unchanged by multiplication with . Hence , so is an eigenvector with eigenvalue .     The blue vector is mapped to the red vector . The direction stays the same, but the length doubles.   These pictures show that some vectors are mapped to scalar multiples of themselves when multiplied by You. This is exactly the phenomenon captured by the notion of eigenvalues and eigenvectors.  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-4",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-4",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Eigenvalue and Eigenvector.",
  "body": " Eigenvalue and Eigenvector   Let be an -matrix. A non-zero vector is called an eigenvector of with eigenvalue  if    "
},
{
  "id": "section-eigenvalues-eigenvectors-3-6",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-6",
  "type": "Example",
  "number": "1.3.3",
  "title": "Two Eigenvectors of a Matrix.",
  "body": " Two Eigenvectors of a Matrix  For the matrix from the previous example, we have already seen that and Therefore is an eigenvector with eigenvalue , and is an eigenvector with eigenvalue .  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-7",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-7",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Eigenspace.",
  "body": " Eigenspace   Let be an -matrix and let be an eigenvalue of . The set is called the eigenspace corresponding to .   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-9",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-9",
  "type": "Example",
  "number": "1.3.5",
  "title": "Testing Whether a Given Vector Is an Eigenvector.",
  "body": " Testing Whether a Given Vector Is an Eigenvector  Consider To test whether a vector is an eigenvector, we multiply it by and check whether the result is a scalar multiple of the original vector.  First, Hence is an eigenvector of with eigenvalue .  Next, This vector is not a scalar multiple of . Therefore is not an eigenvector of .  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-11",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-11",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Linear System for Eigenvectors.",
  "body": " Linear System for Eigenvectors   Let be an -matrix and let . Then the following statements are equivalent.     is an eigenvalue of .    The homogeneous linear system has a non-trivial solution.    In this case,     By definition, is an eigenvalue of if and only if there exists a non-zero vector such that Subtracting from both sides gives   Since , where is the identity matrix, this is equivalent to Thus is an eigenvalue exactly if the system has a non-trivial solution. The set of all solutions of this system is precisely the eigenspace .   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-13",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-13",
  "type": "Example",
  "number": "1.3.7",
  "title": "Finding the Eigenspace for a Given Eigenvalue.",
  "body": " Finding the Eigenspace for a Given Eigenvalue  Again consider We show that is an eigenvalue and determine the corresponding eigenspace.  We have to solve that is, Since the augmented coefficient matrix is   Hence the system is equivalent to so with . Therefore Every non-zero vector in this eigenspace is an eigenvector corresponding to .  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-15",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-15",
  "type": "Example",
  "number": "1.3.8",
  "title": "Eigenvalues of an Upper Triangular Matrix.",
  "body": " Eigenvalues of an Upper Triangular Matrix  Consider the upper triangular matrix We determine its eigenvalues.  The number is an eigenvalue if and only if the system has a non-trivial solution. Now This matrix is still upper triangular.  For the system to have a non-trivial solution, the matrix must fail to have a pivot in every column. Since the diagonal entries are , , and , this happens exactly when at least one of them is zero. Hence are the eigenvalues of .  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-16",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-16",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "Eigenvalues of Triangular Matrices.",
  "body": " Eigenvalues of Triangular Matrices   Let be an upper or lower triangular -matrix. Then the eigenvalues of are exactly the diagonal entries of .    The matrix is again triangular, and its diagonal entries are obtained by subtracting from the diagonal entries of . A triangular matrix is invertible exactly if all diagonal entries are non-zero. Therefore is not invertible exactly when one of these diagonal entries is zero. By the previous theorem, this is equivalent to being an eigenvalue.   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-19",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-19",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "Characteristic Polynomial.",
  "body": " Characteristic Polynomial   Let be an -matrix. The polynomial is called the characteristic polynomial of .  A scalar is an eigenvalue of if and only if     By the theorem on eigenvectors, is an eigenvalue exactly if the homogeneous system has a non-trivial solution. By the invertibility criteria, this is equivalent to not being invertible. For square matrices this happens exactly when Hence the zeros of the characteristic polynomial are precisely the eigenvalues of .   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-20",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-20",
  "type": "Remark",
  "number": "1.3.11",
  "title": "",
  "body": " This is where the determinant tools from the previous section become essential: to find eigenvalues, we first build the matrix and then compute its determinant. In other words, the new topic of eigenvalues builds directly on the determinant techniques from .  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-21",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-21",
  "type": "Example",
  "number": "1.3.12",
  "title": "Computing Eigenvalues via the Characteristic Polynomial.",
  "body": " Computing Eigenvalues via the Characteristic Polynomial  Consider We determine the eigenvalues of .  The characteristic polynomial is Expanding gives   Therefore the eigenvalues are the zeros of this polynomial: Using the quadratic formula, we obtain Hence   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-22",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-22",
  "type": "Definition",
  "number": "1.3.13",
  "title": "Algebraic and Geometric Multiplicity.",
  "body": " Algebraic and Geometric Multiplicity   Let be an eigenvalue of the matrix .  If the characteristic polynomial contains the factor , but not the factor , then is called the algebraic multiplicity of .  The geometric multiplicity of is the maximum number of linearly independent vectors in the eigenspace .   "
},
{
  "id": "section-eigenvalues-eigenvectors-3-24",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-24",
  "type": "Example",
  "number": "1.3.14",
  "title": "A Repeated Eigenvalue.",
  "body": " A Repeated Eigenvalue  Consider We determine its eigenvalues and eigenvectors.  The characteristic polynomial is Thus is the only eigenvalue, and its algebraic multiplicity is .  To find the eigenspace, we solve Since we get the equation Hence All eigenvectors in are multiples of , so we can extract only one linearly independent eigenvector from this eigenspace. Therefore the geometric multiplicity is .  This example shows that algebraic and geometric multiplicity need not coincide.  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-25",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-25",
  "type": "Example",
  "number": "1.3.15",
  "title": "A Rotation Matrix.",
  "body": " A Rotation Matrix  Consider the matrix which describes a rotation by around the origin in the counter-clockwise direction.  Over the real numbers, this matrix has no eigenvectors. Indeed, a rotation by changes the direction of every non-zero real vector, so no non-zero vector can satisfy with .  Algebraically, the characteristic polynomial is This polynomial has no real zero, hence has no real eigenvalue.  Over the complex numbers, however, the equation has the solutions Thus the matrix has complex eigenvalues. This example illustrates that real matrices need not have real eigenvalues.  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-26",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-26",
  "type": "Remark",
  "number": "1.3.16",
  "title": "",
  "body": " This example shows an important limitation: a real matrix need not have enough real eigenvalues and eigenvectors to be diagonalized over . When we study diagonalization in the next subsection, we will therefore pay attention to whether the characteristic polynomial actually has real zeros.  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-27",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-27",
  "type": "Example",
  "number": "1.3.17",
  "title": "Engineering Interpretation.",
  "body": " Engineering Interpretation  In many engineering models, a matrix describes how a system transforms states or forces. If is an eigenvector, then the action of the matrix on this state is especially simple: the state keeps its direction and is only scaled by .  For example, in a mechanical system an eigenvector may represent a preferred vibration mode, and the corresponding eigenvalue can be related to amplification or damping. In stress analysis, eigenvectors of a symmetric matrix describe principal directions, that is, directions in which no shear component appears. This is one reason why eigenvalues are fundamental in applied mathematics and engineering.  "
},
{
  "id": "section-eigenvalues-eigenvectors-3-28",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-28",
  "type": "Theorem",
  "number": "1.3.18",
  "title": "Powers of a Matrix and the Inverse Matrix.",
  "body": " Powers of a Matrix and the Inverse Matrix   Let be an eigenvector of with eigenvalue .    For every ,     If is invertible, then and Hence is an eigenvalue of .      The first claim follows by repeated application of the relation . For example, The general case is proved in the same way by induction.  For the second claim, apply to the equation . This gives Since is invertible, the eigenvalue cannot be zero. Dividing by yields    "
},
{
  "id": "section-eigenvalues-eigenvectors-3-30",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#section-eigenvalues-eigenvectors-3-30",
  "type": "Remark",
  "number": "1.3.19",
  "title": "Procedure for Determining Eigenvalues and Eigenvectors.",
  "body": " Procedure for Determining Eigenvalues and Eigenvectors  Let be an -matrix.    Compute the characteristic polynomial     Determine the zeros of . These are the eigenvalues of .    For each eigenvalue , solve the homogeneous system to obtain the eigenspace .    "
},
{
  "id": "exercises-eigenvalues-eigenvectors-2",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exercises-eigenvalues-eigenvectors-2",
  "type": "Exercise",
  "number": "1.3.1.1",
  "title": "Check a Candidate Eigenvalue.",
  "body": " Check a Candidate Eigenvalue   Consider the matrix Decide whether is an eigenvalue of .    Study the homogeneous system . The value is an eigenvalue exactly if this system has a non-trivial solution.     Yes, because .  Incorrect. Computing gives a non-zero value, so the system has only the trivial solution.    No, because is invertible.  Correct. Since is invertible, the homogeneous system has only the trivial solution, so is not an eigenvalue.    Yes, because the trace of is greater than .  Incorrect. The trace alone does not decide whether a number is an eigenvalue.    No, because is not a diagonal entry of .  Incorrect. That criterion works only for triangular matrices, and this matrix is not triangular.    "
},
{
  "id": "exercises-eigenvalues-eigenvectors-3",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exercises-eigenvalues-eigenvectors-3",
  "type": "Exercise",
  "number": "1.3.1.2",
  "title": "Powers Acting on an Eigenvector.",
  "body": " Powers Acting on an Eigenvector   Let be an eigenvector of the matrix with eigenvalue . Compute .      Incorrect. Repeated application multiplies by each time, so the factor is , not .     Correct. Applying four times multiplies the eigenvector by four times.     Incorrect. The expression can be simplified much further using the eigenvector property.     Incorrect. Vectors are not exponentiated in this way.    "
},
{
  "id": "exercises-eigenvalues-eigenvectors-4",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exercises-eigenvalues-eigenvectors-4",
  "type": "Exercise",
  "number": "1.3.1.3",
  "title": "Find Eigenvalues and Eigenspaces.",
  "body": " Find Eigenvalues and Eigenspaces   Determine the eigenvalues and eigenspaces of     We compute the characteristic polynomial: Factoring gives so the eigenvalues are and .  For , we solve This gives , hence   For , we solve This gives , so . Therefore    "
},
{
  "id": "exercises-eigenvalues-eigenvectors-5",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exercises-eigenvalues-eigenvectors-5",
  "type": "Exercise",
  "number": "1.3.1.4",
  "title": "Interpretation for a Scaling Process.",
  "body": " Interpretation for a Scaling Process   A matrix describes one step of a linear discrete-time model. Explain in your own words what it means for a non-zero state vector to be an eigenvector of . What is the effect of repeated application of the model on this state if the corresponding eigenvalue satisfies , , or ?     The state stays on the same line; it decays for , keeps constant magnitude for , and grows for .  Correct. Along an eigenvector direction, each step only rescales the state by .    The state rotates to a new direction each step; the size behaviour depends only on the trace of .  Incorrect. An eigenvector direction is preserved, and the relevant quantity is the eigenvalue, not the trace.    The state stays fixed whenever .  Incorrect. The state is fixed only in the special case .    The state becomes zero after one step whenever .  Incorrect. If , the state decays gradually; it does not become zero in one step unless .    "
},
{
  "id": "exercises-eigenvalues-eigenvectors-6",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exercises-eigenvalues-eigenvectors-6",
  "type": "Exercise",
  "number": "1.3.1.5",
  "title": "Repeated Eigenvalue.",
  "body": " Repeated Eigenvalue   Determine the characteristic polynomial, the algebraic multiplicity, and the geometric multiplicity of the eigenvalue of     First compute , then solve .     We have So the only eigenvalue is , with algebraic multiplicity .  Next we solve This gives , while is free. Hence so the geometric multiplicity is .   "
},
{
  "id": "ex-powers-diagonal-matrix",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-powers-diagonal-matrix",
  "type": "Example",
  "number": "1.3.20",
  "title": "Powers of a Diagonal Matrix.",
  "body": " Powers of a Diagonal Matrix  Consider the diagonal matrix For any , its -th power is This follows immediately from matrix multiplication: each diagonal entry is raised to the power independently.  "
},
{
  "id": "def-diagonalizable-matrix",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#def-diagonalizable-matrix",
  "type": "Definition",
  "number": "1.3.21",
  "title": "Diagonalizable Matrix.",
  "body": " Diagonalizable Matrix   An matrix is called diagonalizable if there exists an invertible matrix and a diagonal matrix such that    "
},
{
  "id": "thm-diagonalizability-criterion",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#thm-diagonalizability-criterion",
  "type": "Theorem",
  "number": "1.3.22",
  "title": "Criterion for Diagonalizability.",
  "body": " Criterion for Diagonalizability   Let be an matrix.     is diagonalizable if and only if there exist linearly independent eigenvectors of .    If , then the columns of are linearly independent eigenvectors of , and the diagonal entries of are the corresponding eigenvalues.    If the characteristic polynomial of splits into linear factors over , then is diagonalizable if and only if for every eigenvalue , its algebraic multiplicity equals its geometric multiplicity.      For part (1), first assume that is diagonalizable, so for some invertible matrix . Multiplying by on the right gives . If denotes the -th column of and the corresponding diagonal entry of , then the -th column of reads . So the columns of are eigenvectors of . Because is invertible, these columns are linearly independent, so we obtain linearly independent eigenvectors.  Conversely, suppose that are linearly independent eigenvectors with corresponding eigenvalues . Form the matrix Then Since the columns of are linearly independent, is invertible. Multiplying on the right by gives , so is diagonalizable.  Part (2) follows from the identity . If denotes the -th column of and the corresponding diagonal entry of , then the -th column of reads . So each column of is an eigenvector with the matching eigenvalue.  For part (3), assume that the characteristic polynomial splits over . Then the sum of the algebraic multiplicities of all eigenvalues is . For each eigenvalue, the geometric multiplicity is at most the algebraic multiplicity. Hence equality for every eigenvalue is equivalent to having a total of linearly independent eigenvectors. By part (1), this is exactly the condition for diagonalizability.   "
},
{
  "id": "subsec-diagonalization-8",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#subsec-diagonalization-8",
  "type": "Remark",
  "number": "1.3.23",
  "title": "",
  "body": " The extra hypothesis in part (3) matters. For example, the rotation matrix from the previous subsection has no real eigenvalues, so it cannot be diagonalized over .  "
},
{
  "id": "ex-power-diagonalizable-matrix",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-power-diagonalizable-matrix",
  "type": "Example",
  "number": "1.3.24",
  "title": "Computing a Power via Diagonalization.",
  "body": " Computing a Power via Diagonalization  Let We want to compute for arbitrary . We are given that with   First, we compute using the inverse formula:   Now we use : Carrying out the multiplications:   "
},
{
  "id": "ex-diagonalization-3x3",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-diagonalization-3x3",
  "type": "Example",
  "number": "1.3.25",
  "title": "Diagonalizing a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " Diagonalizing a Matrix  Find matrices and such that , where    Step 1: Characteristic polynomial. We compute Expanding along the second column (which has two zeros):    Step 2: Eigenvalues. The eigenvalues are (algebraic multiplicity 1) and (algebraic multiplicity 2).   Step 3: Eigenspaces. For , we solve : The free variable is , giving the eigenvector .  For , we solve : The free variables are and , giving two linearly independent eigenvectors The geometric multiplicity of is 2, matching the algebraic multiplicity.   Conclusion. Since both multiplicities match for every eigenvalue, is diagonalizable. Placing the eigenvectors as columns of and the corresponding eigenvalues on the diagonal of :   "
},
{
  "id": "ex-non-diagonalizable-matrix",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-non-diagonalizable-matrix",
  "type": "Example",
  "number": "1.3.26",
  "title": "A Non-Diagonalizable Matrix.",
  "body": " A Non-Diagonalizable Matrix  Consider The characteristic polynomial is , so the only eigenvalue is with algebraic multiplicity 2.  To find the eigenspace, we solve : The eigenspace is so the eigenspace provides only one linearly independent eigenvector. The geometric multiplicity of is 1, which is strictly less than the algebraic multiplicity 2. Therefore is not diagonalizable.  "
},
{
  "id": "thm-symmetric-diagonalizable",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#thm-symmetric-diagonalizable",
  "type": "Theorem",
  "number": "1.3.27",
  "title": "Diagonalizability of Symmetric Matrices.",
  "body": " Diagonalizability of Symmetric Matrices   Let be a symmetric matrix (i.e. ). Then:     is always diagonalizable.    There exist pairwise orthogonal eigenvectors of . In particular, can be diagonalized by an orthogonal matrix , meaning .     "
},
{
  "id": "exer-check-diagonalizable-2x2",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-check-diagonalizable-2x2",
  "type": "Exercise",
  "number": "1.3.2.1",
  "title": "Check Diagonalizability.",
  "body": " Check Diagonalizability   Determine whether the matrix is diagonalizable. If yes, find and . If no, explain why.    Compute the characteristic polynomial and check whether algebraic and geometric multiplicities agree.     The characteristic polynomial is So the only eigenvalue is , with algebraic multiplicity .  To find the eigenspace, solve This gives , while is free. Hence The geometric multiplicity is therefore .  Since the geometric multiplicity is smaller than the algebraic multiplicity, the matrix is not diagonalizable.   "
},
{
  "id": "exer-diagonalize-compute-power",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-diagonalize-compute-power",
  "type": "Exercise",
  "number": "1.3.2.2",
  "title": "Diagonalize and Compute a Power.",
  "body": " Diagonalize and Compute a Power   Diagonalize the matrix by finding matrices and with . Then compute .    Because is upper triangular, its eigenvalues are the diagonal entries. Then determine one eigenvector for each eigenvalue.    Since is upper triangular, its eigenvalues are and .  For , we solve which gives . So we may choose   For , we solve so . We may choose   Hence Since we obtain   Since and ,    "
},
{
  "id": "exer-discrete-population-model",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-discrete-population-model",
  "type": "Exercise",
  "number": "1.3.2.3",
  "title": "Mode Decomposition in a Discrete Model.",
  "body": " Mode Decomposition in a Discrete Model   Suppose a discrete-time model satisfies and the initial state is Which statement about is correct?     ; the -component grows and the -component decays.  Correct. Each eigenvector component is scaled independently by the corresponding power of its eigenvalue.    ; the -component decays and the -component grows.  Incorrect. The eigenvalue belongs to , and belongs to .     Incorrect. The whole vector is not scaled by a single common factor; each eigenvector direction evolves separately.    for all , because eigenvectors do not change under repeated multiplication.  Incorrect. Eigenvectors keep their direction, but their lengths are multiplied by successive powers of the eigenvalue.    "
},
{
  "id": "def-quadratic-form",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#def-quadratic-form",
  "type": "Definition",
  "number": "1.3.28",
  "title": "Quadratic Form.",
  "body": " Quadratic Form   A quadratic form is a map where is a symmetric matrix. The matrix is called the matrix of the quadratic form .   "
},
{
  "id": "rem-symmetrization",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#rem-symmetrization",
  "type": "Remark",
  "number": "1.3.29",
  "title": "",
  "body": " Every quadratic form can be uniquely represented by a symmetric matrix. If a non-symmetric matrix is given, we can replace it by the symmetric matrix without changing the quadratic form, since for all .  "
},
{
  "id": "subsec-quadratic-forms-5",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#subsec-quadratic-forms-5",
  "type": "Remark",
  "number": "1.3.30",
  "title": "",
  "body": " In engineering, quadratic forms often measure energy. For instance, if records two small displacements in a coupled spring system, then the elastic energy can have the form . Positive definiteness then means that every non-zero displacement stores positive energy, which is exactly what we expect from a stable configuration.  "
},
{
  "id": "ex-quadratic-form-2x2",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-quadratic-form-2x2",
  "type": "Example",
  "number": "1.3.31",
  "title": "Expanding a Quadratic Form.",
  "body": " Expanding a Quadratic Form  Let The associated quadratic form is Observe that the coefficient of the mixed term is .  "
},
{
  "id": "def-definiteness",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#def-definiteness",
  "type": "Definition",
  "number": "1.3.32",
  "title": "Definiteness of a Quadratic Form.",
  "body": " Definiteness of a Quadratic Form   Let be a symmetric matrix with associated quadratic form .     is positive definite if for all .     is positive semidefinite if for all .     is negative definite if for all .     is negative semidefinite if for all .     is indefinite if takes both positive and negative values.     "
},
{
  "id": "ex-definiteness-test",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-definiteness-test",
  "type": "Example",
  "number": "1.3.33",
  "title": "Testing Definiteness by Inspection.",
  "body": " Testing Definiteness by Inspection  We test the definiteness of three quadratic forms.  (a) . We evaluate at two points: Since takes both positive and negative values, it is indefinite .  (b) . Since , the sum is always non-negative. It is zero only when . Therefore is positive definite .  (c) . Here even though . Therefore is positive semidefinite .  "
},
{
  "id": "ex-diagonal-quadratic-forms",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-diagonal-quadratic-forms",
  "type": "Example",
  "number": "1.3.34",
  "title": "Diagonal Quadratic Forms as Model Cases.",
  "body": " Diagonal Quadratic Forms as Model Cases  For a diagonal matrix , the quadratic form is In this case, the sign pattern of the coefficients already reveals the geometry.  (a) For , both coefficients are positive, so for every non-zero . The level line is an ellipse.    The level line is an ellipse.   (b) For , one coefficient is positive and one is negative. Hence the form is indefinite. The level line is a hyperbola.    The level line is a hyperbola.   (c) For , we have for all , but . So the form is positive semidefinite. The level set consists of two vertical lines.    For , the level set consists of the lines ; the dashed line corresponds to the zero level.   These diagonal examples motivate the general criterion below: once a symmetric matrix is orthogonally diagonalized, its quadratic form reduces to exactly this kind of expression.  "
},
{
  "id": "thm-definiteness-eigenvalues",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#thm-definiteness-eigenvalues",
  "type": "Theorem",
  "number": "1.3.35",
  "title": "Definiteness Criterion via Eigenvalues.",
  "body": " Definiteness Criterion via Eigenvalues   Let be a symmetric matrix with eigenvalues (all real, by ).     is positive definite (resp. semidefinite) if and only if all eigenvalues satisfy (resp. ).     is negative definite (resp. semidefinite) if and only if all eigenvalues satisfy (resp. ).     is indefinite if and only if there exist both a positive and a negative eigenvalue.      By , there is an orthogonal matrix and a diagonal matrix such that .  Now take any vector and write it in the form . Then So the sign of the quadratic form is determined entirely by the signs of the eigenvalues.  If all eigenvalues are positive, then every term on the right-hand side is non-negative and at least one is positive whenever , so the quadratic form is positive definite. The semidefinite, negative definite, and negative semidefinite cases are analogous. If there are both positive and negative eigenvalues, then choosing along the corresponding coordinate axes produces both positive and negative values, so the form is indefinite.   "
},
{
  "id": "ex-eigenvalue-criterion-positive-definite",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-eigenvalue-criterion-positive-definite",
  "type": "Example",
  "number": "1.3.36",
  "title": "Positive Definiteness from Eigenvalues.",
  "body": " Positive Definiteness from Eigenvalues  Consider Its characteristic polynomial is So the eigenvalues are and , both positive. By the eigenvalue criterion, is positive definite.  "
},
{
  "id": "ex-eigenvalue-criterion-indefinite",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-eigenvalue-criterion-indefinite",
  "type": "Example",
  "number": "1.3.37",
  "title": "Indefiniteness from Mixed Eigenvalue Signs.",
  "body": " Indefiniteness from Mixed Eigenvalue Signs  Consider We compute Thus the eigenvalues are and . Since there is one positive and one negative eigenvalue, the matrix is indefinite.  This agrees with direct values of the quadratic form:   "
},
{
  "id": "thm-sylvester-criterion",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#thm-sylvester-criterion",
  "type": "Theorem",
  "number": "1.3.38",
  "title": "Sylvester’s Criterion.",
  "body": " Sylvester's Criterion   Let be a symmetric matrix. Denote by the leading principal submatrix (the submatrix formed by the first rows and columns of ).     is positive definite if and only if      is negative definite if and only if In other words, the leading principal minors alternate in sign: , , , and so on.     "
},
{
  "id": "ex-sylvester-positive-definite",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-sylvester-positive-definite",
  "type": "Example",
  "number": "1.3.39",
  "title": "Positive Definiteness via Sylvester’s Criterion.",
  "body": " Positive Definiteness via Sylvester's Criterion  Consider The leading principal submatrices are Their determinants are Since all leading principal minors are positive, is positive definite.  "
},
{
  "id": "ex-sylvester-negative-definite",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#ex-sylvester-negative-definite",
  "type": "Example",
  "number": "1.3.40",
  "title": "Negative Definiteness via Sylvester’s Criterion.",
  "body": " Negative Definiteness via Sylvester's Criterion  Consider We compute The leading principal minors alternate in sign, so Sylvester's criterion shows that is negative definite.  "
},
{
  "id": "subsec-quadratic-forms-18",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#subsec-quadratic-forms-18",
  "type": "Remark",
  "number": "1.3.41",
  "title": "",
  "body": " In practice, Sylvester's criterion is most useful when the eigenvalues are inconvenient to compute exactly. For a symmetric matrix, it gives a fast test for positive or negative definiteness using only determinants of smaller submatrices.  "
},
{
  "id": "rem-local-extrema-forward",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#rem-local-extrema-forward",
  "type": "Remark",
  "number": "1.3.42",
  "title": "Connection to Local Extrema.",
  "body": " Connection to Local Extrema  Quadratic forms play a central role in the analysis of local extrema of functions . Near a critical point (where ), the Taylor expansion gives The second-order term is a quadratic form with the Hessian matrix :    If is positive definite, then is a strict local minimum.    If is negative definite, then is a strict local maximum.    If is indefinite, then is a saddle point.    This connection is developed in detail in Section 2.2 (Error Propagation, Taylor Expansion, and Extrema).  "
},
{
  "id": "rem-principal-axes",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#rem-principal-axes",
  "type": "Remark",
  "number": "1.3.43",
  "title": "Principal Axes and the Geometry of Quadratic Forms.",
  "body": " Principal Axes and the Geometry of Quadratic Forms  Since the matrix of a quadratic form is symmetric, it can be diagonalized by an orthogonal matrix: . Here we only use the basic idea of changing coordinates; a full general theory of change of basis is not needed yet. Substituting the coordinate change : In the new coordinates , the quadratic form has no mixed terms . The columns of (the eigenvectors of ) define the principal axes of the quadratic form.  Geometrically, the level sets are ellipses (positive definite case), hyperbolas (indefinite case), or degenerate shapes in between. The principal axes are exactly the axes of symmetry of these level curves.    After an orthogonal change of coordinates, the mixed term disappears and the level curve aligns with the principal axes and .   "
},
{
  "id": "exer-expand-quadratic-form",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-expand-quadratic-form",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "Expand a Quadratic Form.",
  "body": " Expand a Quadratic Form   Let Write out the quadratic form explicitly as a polynomial in .      Incorrect. The mixed term receives contributions from both off-diagonal entries.     Correct. The mixed coefficient is .     Incorrect. The sign of the mixed term is negative, not positive.     Incorrect. The squared terms and mixed term have been combined incorrectly.    "
},
{
  "id": "exer-definiteness-eigenvalues",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-definiteness-eigenvalues",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "Classify by Eigenvalues.",
  "body": " Classify by Eigenvalues   Determine the eigenvalues of and use them to decide whether is positive definite, negative definite, or indefinite.     Negative definite  Incorrect. Both eigenvalues are positive, not negative.    Positive definite  Correct. The eigenvalues are and , so both are positive.    Indefinite  Incorrect. An indefinite matrix needs both a positive and a negative eigenvalue.    Negative semidefinite  Incorrect. The matrix has strictly positive eigenvalues.    "
},
{
  "id": "exer-sylvester-3x3",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-sylvester-3x3",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "Sylvester’s Criterion for a <span class=\"process-math\">\\(3\\times 3\\)<\/span> Matrix.",
  "body": " Sylvester's Criterion for a Matrix   Apply Sylvester's criterion to determine whether is positive definite.    Compute , , and in turn.     The leading principal submatrices are   Their determinants are and   All three leading principal minors are positive. By Sylvester's criterion, the matrix is positive definite.   "
},
{
  "id": "exer-hessian-classification",
  "level": "2",
  "url": "section-eigenvalues-eigenvectors.html#exer-hessian-classification",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "Classify a Critical Point.",
  "body": " Classify a Critical Point   The function has a critical point at the origin with Hessian Is the origin a local minimum, a local maximum, or a saddle point?    Use Sylvester's criterion or compute the eigenvalues of the Hessian.    Let We apply Sylvester's criterion. The first leading principal minor is , while   So is not positive definite and not negative definite. In fact, it is positive semidefinite. Therefore the second-derivative test is inconclusive here: from the Hessian alone we cannot decide whether the origin is a local minimum, a local maximum, or a saddle point.   "
},
{
  "id": "section-functions-continuity-partial-derivatives",
  "level": "1",
  "url": "section-functions-continuity-partial-derivatives.html",
  "type": "Section",
  "number": "2.1",
  "title": "Functions, Continuity, and Partial Derivatives",
  "body": " Functions, Continuity, and Partial Derivatives   This section extends the core ideas of single-variable calculus — domains, continuity, and differentiation — to functions that depend on several real variables simultaneously. We begin by defining what such functions are and how to describe their graphs and level sets geometrically. We then introduce the sequence-based definition of continuity in and develop practical tools for proving that built-up functions are continuous. Finally, we study how to differentiate functions of several variables: partial derivatives with respect to individual coordinates, the gradient as the vector of all partial derivatives, total differentiability and the tangent plane, directional derivatives, and the second-order Hessian matrix.    Functions of Several Variables   In mathematics and engineering, many quantities depend simultaneously on several inputs. The temperature at a point in a room is a function of the three position coordinates; the pressure of an ideal gas depends on both its volume and its temperature. This subsection introduces real functions of several variables, discusses how their domains are determined, and explores two ways to visualise them: the graph as a surface in space, and the contour plot via level curves.    Real Function of Several Variables   Let . A map is called a real function of several variables . The set is the domain of definition of .     Two Basic Examples      , . For instance, and .     , . The square root requires a non-negative argument, so the closed ball of radius centred at the origin.       Functions of Several Variables in Engineering and Physics  Multivariable functions appear throughout applied disciplines:      Harmonic oscillation:  , where is the amplitude, the angular frequency, and the phase shift.     Mechanical power:  , where is work and is time.     Ideal gas law:  , expressing pressure as a function of volume and temperature.       Visualisation of Functions of Two Variables  There are two standard ways to visualise a function :     The graph is the surface     A contour plot displays several level curves  for chosen constants . This is analogous to elevation contour lines on a topographic map.     We illustrate both visualisation methods with two concrete examples. For the paraboloid , the graph is a bowl-shaped surface and the level curves are circles. For the saddle function , the graph bends upward in one direction and downward in the other, while the level curves are hyperbolas.   Graph of the function .       Contour plot of ; the level curves are circles centred at the origin.       Graph of the function .       Contour plot of ; positive level curves open along the -direction and negative level curves along the -direction.        The Upper Unit Semi-sphere as a Graph  We investigate the function whose graph is the upper hemisphere of the unit sphere.  The domain must consist of all base points that lie under the hemisphere: For a point , the height satisfies , giving    The upper unit semi-sphere can be written as the graph of over the unit disk.        Surface of Revolution  Rotating the graph of a function around the -axis produces a surface of revolution . In terms of Cartesian coordinates, this surface is the graph of The function value depends only on the radial distance to the -axis, which explains the rotational symmetry.    A First Surface of Revolution  Consider the function , .  Rotating the graph of around the -axis yields the surface This example shows directly how a one-variable function of the radius becomes a function of two variables.   Left: the profile . Right: the corresponding surface of revolution .        A Surface of Revolution as the Graph of a Two-Variable Function  We investigate the function by first showing that its one-variable profile can be extended continuously at the origin and then by rotating this profile around the -axis to obtain a surface of revolution.  Consider , .      Extending continuously to all of . Using the Taylor series with : Setting extends continuously to all of .     Describing the surface of revolution. Rotating the graph of around the -axis replaces the distance from the axis by the radial distance . The resulting surface is the graph of extended by .      Left: the profile away from . Right: the surface obtained by rotation, extended by .         Continuity   Continuity for a function of several variables means that nearby inputs produce nearby outputs — exactly as in one dimension. The key new feature is that a point can be approached from infinitely many directions, and the function must return the same limit along every approach path. We make this precise using sequences, because the same sequence definition used for single-variable limits carries over without change.    Limit of a Sequence in   Let be a sequence in and let . We say that  converges to  , written if for every there exists such that for all : Geometrically, eventually lies inside every open ball of radius centred at .   Example of a sequence in : the points approach the limit .         Componentwise Convergence  If is a sequence in , then it converges to if and only if each coordinate sequence converges: for . This reduces questions about sequences in to familiar one-dimensional problems.    A Sequence in  The sequence in satisfies , since each coordinate converges: , , and .    Limit of a Multivariate Function   Let , and let be an accumulation point of . We say that has limit  at if for every sequence with :   For example, for and , every sequence approaching the origin has image values approaching .   The function has limit at ; different approach sequences in the plane still lead to the same function value limit.         Continuity of a Function of Variables      A function is continuous at if for every sequence in with :     A function is continuous if it is continuous at every point of its domain.       A key feature of multivariate functions is that continuity requires the same limit along every approach path, not only along coordinate axes. The next example shows how to prove discontinuity by finding two sequences approaching the same point with different limits.    How Path Tests Can and Cannot Be Used  If two approach paths give different limiting values, the limit does not exist. However, checking only a few paths can never prove that a limit exists, because there are infinitely many possible ways to approach the point. To prove existence, one needs a general argument, for example by using continuity laws, an estimate, or a theorem.    Discontinuity via Two Approach Paths  Analyse the continuity of   For , the function is a ratio of polynomials with a non-vanishing denominator, hence continuous. At the origin we test two approach paths:     Along the -axis: .     Along the diagonal: .      Since the limits along the two paths differ, does not exist, and is not continuous at the origin.   The two sequences and both approach the origin, but they produce different function value limits.       The following theorem shows that we can build many continuous functions of several variables from continuous functions of one variable by using sums, products, quotients, and compositions.   Laws of Continuity       Constant functions  are continuous on .     Coordinate functions  are continuous on .    If are continuous on , then so are , , and ; and is continuous on .     Compositions: if and are continuous with , then is continuous on .       We use the sequence criterion. Constant and coordinate functions preserve limits of convergent sequences immediately. If in and , , then the usual one-variable limit laws imply , , and, provided , also . For compositions, implies , and continuity of then gives .     Proving Continuity via the Combination Laws  Show that , , is continuous.  Define auxiliary functions (coordinate function), (coordinate function), and (a continuous real function). Then . By , the composition is continuous, and the product of two continuous functions is continuous, so is continuous on .     Partial Derivatives, Gradient, and Differentiability   For a function of a single variable, the derivative measures the rate of change in the only available direction. For a function of several variables we can still measure rates of change, but now we must specify a direction. The simplest choice is to vary one variable while holding all others fixed: this gives the partial derivative . Collecting all partial derivatives into a single vector yields the gradient , which encodes both the magnitude and direction of steepest increase. When the function can be approximated near a point by a linear function involving the gradient, we call it (totally) differentiable at that point.     Idea of Partial Differentiation  For a single-variable function , the derivative at is the limit of slopes of secant lines: This generalises to a function of two variables as follows: fix , consider the curve of intersection in the -plane, and compute its slope: This is the partial derivative of with respect to at .   To compute at , we fix , intersect the surface with the vertical plane , and then take the slope of the tangent line to the resulting curve.    Annotated PGF diagram showing the surface , the intersection curve for fixed , the secant slope, and its limiting tangent slope representing .      Computing a Partial Derivative from the Definition  Let . Fix and compute directly from the limit definition.  The slope of the secant through and is As , this converges to . Thus     Partial Derivative; Partially Differentiable Function   Let be defined on an open set , let , and let be the -th standard unit vector of .     The partial derivative of with respect to at is     To compute  , treat all variables except as constants and differentiate the resulting single-variable function with respect to . All standard differentiation rules (product rule, chain rule, etc.) apply.    We call  partially differentiable on if all partial derivatives exist at every point of .        Partial Derivatives of a Mixed Exponential  Compute the partial derivatives of .        Gradient   For a partially differentiable function , where , the gradient of at is the column vector of all partial derivatives:      Gradient of the Normal Paraboloid  Let . We compute the gradient and then interpret geometrically how it is related to the graph and the level curves of .   At every point , the gradient points radially outwards from the origin — in the direction of steepest ascent on the paraboloid.   For the paraboloid , the gradient points radially outwards on the contour plot and corresponds to the direction of steepest ascent on the surface.         Local Linear Approximation and the Tangent Plane  For a single-variable function , the tangent line at gives the best linear approximation: For a two-variable function , the tangent line is replaced by the tangent plane . Provided the tangent plane exists at , its equation is    For a concave surface, the tangent plane is easy to distinguish as the plane that best approximates the graph near .        Partial Derivatives Can Exist Without a Tangent Plane  Existence of all partial derivatives at a point does not guarantee a tangent plane. Consider . In the -plane ( ): , so . Likewise . Along the diagonal we have , while the candidate tangent plane from the partial derivatives is the constant plane . Hence the remainder is , and for , which does not tend to . So is not differentiable at . Yet the graph near the origin cannot be approximated by a plane, because the function behaves differently in oblique directions. Total differentiability is a strictly stronger requirement.   The function has vanishing partial derivatives at the origin, but the graph still has a ridge there and cannot be approximated by a single tangent plane.        Differentiable Function       is called differentiable (or totally differentiable ) at if there exists a vector such that where the remainder satisfies This condition formalises mathematically the geometric idea that can be approximated near by its tangent plane, because the remainder is negligible compared with the distance to . The linear part is the tangent plane  .        Continuously Partially Differentiable Implies Differentiable   If is partially differentiable on an open set and all partial derivatives are continuous on , then is differentiable on . In other words, every function is totally differentiable.     Tangent Plane and Gradient of a Rational Function  Let . In the following, we investigate this function step by step: first its domain and level curves, then its gradient. Finally, we will investigate at which points the plane is parallel to the -plane.      Domain. The denominator for all , so .     Level curves. The level set requires , i.e.\\ . For these are concentric circles around the origin.     Gradient.  Thus The gradient points radially towards the origin.     Tangent plane parallel to the -plane. The tangent plane is parallel to the -plane if and only if . From the formula above this forces , the unique critical point. At this point , so the tangent plane is .       Linear Approximation of a Three-Variable Function  We now determine the linear approximation of the function at the point .  First, . Then: The tangent plane (linear approximation) is therefore      Directional Derivative   Let be differentiable at and let be a unit vector ( ).     The directional derivative of at in direction is     For a differentiable function, the directional derivative equals the dot product of the gradient with :        The directional derivative measures the slope of along the line through in the direction .    PGF diagram of a surface with a point above the domain, a direction vector in the base plane, and the corresponding slope on the surface representing the directional derivative.      Computing a Directional Derivative  Let and . Find the rate of change of in the direction .      Normalise:  , so .     Compute the gradient at :       Directional derivative:         Geometric Meaning of the Gradient  Writing the directional derivative as where is the angle between and , reveals two important facts:     The rate of change is maximised when , i.e., when is parallel to . Therefore, the gradient points in the direction of steepest ascent .    The rate of change is zero when . Therefore, level curves are everywhere orthogonal to the gradient .      The gradient is perpendicular to the level curve through and points in the direction where the function increases most rapidly.        Application: Gradient Descent in Machine Learning  Consider fitting a linear model to data points . The mean squared error is a function of two variables and . The gradient descent algorithm iteratively updates in the direction of (steepest descent), reducing the error at each step. This is one of the foundational algorithms in modern machine learning.   Gradient descent follows successive steps in the direction of steepest decrease until it approaches a minimum of the error function.         Higher-Order Partial Derivatives and the Hessian Matrix   Just as the derivative of a single-variable function can itself be differentiated to produce the second derivative, the partial derivatives of a multivariate function can be partially differentiated again to produce second-order partial derivatives . There are such derivatives for a function of variables. A fundamental symmetry result — Schwarz' theorem — states that the order of differentiation does not matter when the mixed derivatives are continuous. Arranging all second-order partial derivatives into a matrix yields the Hessian matrix , which plays the role of the second derivative in the multivariate setting.    Partial Derivatives of Higher Order   Let be partially differentiable on an open set . If the partial derivatives are themselves partially differentiable, we can form the second-order partial derivatives : Iterating this process gives partial derivatives of any order.     Second-Order Partial Derivatives  Compute all second-order partial derivatives of .  First-order partial derivatives: Second-order partial derivatives: Note that the two mixed partial derivatives are equal: .    Schwarz' Theorem (Symmetry of Mixed Partials)   Let be defined on an open set . Assume that all second-order partial derivatives of exist and are continuous on , and let . Then for all : The analogous symmetry holds for partial derivatives of third and higher order.    As a consequence, the matrix of all second-order partial derivatives is symmetric whenever the hypotheses of Schwarz' theorem are satisfied. This matrix is called the Hessian matrix.   Hessian Matrix   Let be defined on an open set , and assume that all second-order partial derivatives of are continuous on . Let . The Hessian matrix of at is the matrix of all second-order partial derivatives: By , is symmetric .     Hessian Matrix of a Two-Variable Function  For (cf.\\ ): As predicted by Schwarz' theorem, this matrix is symmetric.     Check Your Understanding   Recognise the Domain   Consider the function Which set is its domain?     All of  Incorrect. The expression under the square root must be non-negative.     Correct. The square root requires , which is the closed disk of radius .     Incorrect. Equality gives only the boundary circle, but interior points are allowed too.     Incorrect. Outside the circle, the radicand is negative.      Use of a Path Test   Suppose two different paths approaching the same point produce two different function-value limits. What can you conclude?     The limit at does not exist, so the function is not continuous there.  Correct. Different path limits immediately rule out the existence of a single multivariate limit.    The function is still continuous if the two paths are straight lines.  Incorrect. Any two approach paths with different limits are enough to disprove continuity.    The function is continuous if one of the two limits equals .  Incorrect. Continuity requires all approach paths to give the same limit.    No conclusion is possible; one must check every path.  Incorrect. A single mismatch already proves that the limit does not exist.      Gradient and Directional Derivative   Let Compute the gradient at and the directional derivative at that point in the direction     First compute the partial derivatives: Hence   The directional derivative is the dot product with the unit vector :      Compute a Hessian Matrix   Compute the Hessian matrix of     The first-order partial derivatives are Differentiating again gives Therefore      "
},
{
  "id": "def-multivariable-function",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-multivariable-function",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Real Function of Several Variables.",
  "body": " Real Function of Several Variables   Let . A map is called a real function of several variables . The set is the domain of definition of .   "
},
{
  "id": "ex-multivariable-function-basic",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-multivariable-function-basic",
  "type": "Example",
  "number": "2.1.2",
  "title": "Two Basic Examples.",
  "body": " Two Basic Examples      , . For instance, and .     , . The square root requires a non-negative argument, so the closed ball of radius centred at the origin.     "
},
{
  "id": "ex-multivariable-function-engineering",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-multivariable-function-engineering",
  "type": "Example",
  "number": "2.1.3",
  "title": "Functions of Several Variables in Engineering and Physics.",
  "body": " Functions of Several Variables in Engineering and Physics  Multivariable functions appear throughout applied disciplines:      Harmonic oscillation:  , where is the amplitude, the angular frequency, and the phase shift.     Mechanical power:  , where is work and is time.     Ideal gas law:  , expressing pressure as a function of volume and temperature.     "
},
{
  "id": "rem-visualization-multivariable",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-visualization-multivariable",
  "type": "Remark",
  "number": "2.1.4",
  "title": "Visualisation of Functions of Two Variables.",
  "body": " Visualisation of Functions of Two Variables  There are two standard ways to visualise a function :     The graph is the surface     A contour plot displays several level curves  for chosen constants . This is analogous to elevation contour lines on a topographic map.     We illustrate both visualisation methods with two concrete examples. For the paraboloid , the graph is a bowl-shaped surface and the level curves are circles. For the saddle function , the graph bends upward in one direction and downward in the other, while the level curves are hyperbolas.   Graph of the function .       Contour plot of ; the level curves are circles centred at the origin.       Graph of the function .       Contour plot of ; positive level curves open along the -direction and negative level curves along the -direction.      "
},
{
  "id": "ex-semisphere-graph",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-semisphere-graph",
  "type": "Example",
  "number": "2.1.9",
  "title": "The Upper Unit Semi-sphere as a Graph.",
  "body": " The Upper Unit Semi-sphere as a Graph  We investigate the function whose graph is the upper hemisphere of the unit sphere.  The domain must consist of all base points that lie under the hemisphere: For a point , the height satisfies , giving    The upper unit semi-sphere can be written as the graph of over the unit disk.      "
},
{
  "id": "rem-surface-of-revolution",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-surface-of-revolution",
  "type": "Remark",
  "number": "2.1.11",
  "title": "Surface of Revolution.",
  "body": " Surface of Revolution  Rotating the graph of a function around the -axis produces a surface of revolution . In terms of Cartesian coordinates, this surface is the graph of The function value depends only on the radial distance to the -axis, which explains the rotational symmetry.  "
},
{
  "id": "ex-surface-of-revolution-simple",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-surface-of-revolution-simple",
  "type": "Example",
  "number": "2.1.12",
  "title": "A First Surface of Revolution.",
  "body": " A First Surface of Revolution  Consider the function , .  Rotating the graph of around the -axis yields the surface This example shows directly how a one-variable function of the radius becomes a function of two variables.   Left: the profile . Right: the corresponding surface of revolution .      "
},
{
  "id": "ex-surface-of-revolution",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-surface-of-revolution",
  "type": "Example",
  "number": "2.1.14",
  "title": "A Surface of Revolution as the Graph of a Two-Variable Function.",
  "body": " A Surface of Revolution as the Graph of a Two-Variable Function  We investigate the function by first showing that its one-variable profile can be extended continuously at the origin and then by rotating this profile around the -axis to obtain a surface of revolution.  Consider , .      Extending continuously to all of . Using the Taylor series with : Setting extends continuously to all of .     Describing the surface of revolution. Rotating the graph of around the -axis replaces the distance from the axis by the radial distance . The resulting surface is the graph of extended by .      Left: the profile away from . Right: the surface obtained by rotation, extended by .      "
},
{
  "id": "def-sequence-limit-Rn",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-sequence-limit-Rn",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Limit of a Sequence in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Limit of a Sequence in   Let be a sequence in and let . We say that  converges to  , written if for every there exists such that for all : Geometrically, eventually lies inside every open ball of radius centred at .   Example of a sequence in : the points approach the limit .       "
},
{
  "id": "rem-sequence-componentwise",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-sequence-componentwise",
  "type": "Remark",
  "number": "2.1.18",
  "title": "Componentwise Convergence.",
  "body": " Componentwise Convergence  If is a sequence in , then it converges to if and only if each coordinate sequence converges: for . This reduces questions about sequences in to familiar one-dimensional problems.  "
},
{
  "id": "ex-sequence-Rn",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-sequence-Rn",
  "type": "Example",
  "number": "2.1.19",
  "title": "A Sequence in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " A Sequence in  The sequence in satisfies , since each coordinate converges: , , and .  "
},
{
  "id": "def-multivariate-limit",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-multivariate-limit",
  "type": "Definition",
  "number": "2.1.20",
  "title": "Limit of a Multivariate Function.",
  "body": " Limit of a Multivariate Function   Let , and let be an accumulation point of . We say that has limit  at if for every sequence with :   For example, for and , every sequence approaching the origin has image values approaching .   The function has limit at ; different approach sequences in the plane still lead to the same function value limit.       "
},
{
  "id": "def-multivariate-continuity",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-multivariate-continuity",
  "type": "Definition",
  "number": "2.1.22",
  "title": "Continuity of a Function of <span class=\"process-math\">\\(n\\)<\/span> Variables.",
  "body": " Continuity of a Function of Variables      A function is continuous at if for every sequence in with :     A function is continuous if it is continuous at every point of its domain.      "
},
{
  "id": "rem-path-test-warning",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-path-test-warning",
  "type": "Remark",
  "number": "2.1.23",
  "title": "How Path Tests Can and Cannot Be Used.",
  "body": " How Path Tests Can and Cannot Be Used  If two approach paths give different limiting values, the limit does not exist. However, checking only a few paths can never prove that a limit exists, because there are infinitely many possible ways to approach the point. To prove existence, one needs a general argument, for example by using continuity laws, an estimate, or a theorem.  "
},
{
  "id": "ex-discontinuity-rational",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-discontinuity-rational",
  "type": "Example",
  "number": "2.1.24",
  "title": "Discontinuity via Two Approach Paths.",
  "body": " Discontinuity via Two Approach Paths  Analyse the continuity of   For , the function is a ratio of polynomials with a non-vanishing denominator, hence continuous. At the origin we test two approach paths:     Along the -axis: .     Along the diagonal: .      Since the limits along the two paths differ, does not exist, and is not continuous at the origin.   The two sequences and both approach the origin, but they produce different function value limits.      "
},
{
  "id": "thm-laws-of-continuity",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#thm-laws-of-continuity",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "Laws of Continuity.",
  "body": " Laws of Continuity       Constant functions  are continuous on .     Coordinate functions  are continuous on .    If are continuous on , then so are , , and ; and is continuous on .     Compositions: if and are continuous with , then is continuous on .       We use the sequence criterion. Constant and coordinate functions preserve limits of convergent sequences immediately. If in and , , then the usual one-variable limit laws imply , , and, provided , also . For compositions, implies , and continuity of then gives .   "
},
{
  "id": "ex-continuity-product",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-continuity-product",
  "type": "Example",
  "number": "2.1.27",
  "title": "Proving Continuity via the Combination Laws.",
  "body": " Proving Continuity via the Combination Laws  Show that , , is continuous.  Define auxiliary functions (coordinate function), (coordinate function), and (a continuous real function). Then . By , the composition is continuous, and the product of two continuous functions is continuous, so is continuous on .  "
},
{
  "id": "rem-partial-derivative-idea",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-partial-derivative-idea",
  "type": "Remark",
  "number": "2.1.28",
  "title": "Idea of Partial Differentiation.",
  "body": " Idea of Partial Differentiation  For a single-variable function , the derivative at is the limit of slopes of secant lines: This generalises to a function of two variables as follows: fix , consider the curve of intersection in the -plane, and compute its slope: This is the partial derivative of with respect to at .   To compute at , we fix , intersect the surface with the vertical plane , and then take the slope of the tangent line to the resulting curve.    Annotated PGF diagram showing the surface , the intersection curve for fixed , the secant slope, and its limiting tangent slope representing .    "
},
{
  "id": "ex-partial-derivative-limit",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-partial-derivative-limit",
  "type": "Example",
  "number": "2.1.30",
  "title": "Computing a Partial Derivative from the Definition.",
  "body": " Computing a Partial Derivative from the Definition  Let . Fix and compute directly from the limit definition.  The slope of the secant through and is As , this converges to . Thus   "
},
{
  "id": "def-partial-derivative",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-partial-derivative",
  "type": "Definition",
  "number": "2.1.31",
  "title": "Partial Derivative; Partially Differentiable Function.",
  "body": " Partial Derivative; Partially Differentiable Function   Let be defined on an open set , let , and let be the -th standard unit vector of .     The partial derivative of with respect to at is     To compute  , treat all variables except as constants and differentiate the resulting single-variable function with respect to . All standard differentiation rules (product rule, chain rule, etc.) apply.    We call  partially differentiable on if all partial derivatives exist at every point of .      "
},
{
  "id": "ex-partial-derivatives-exponential",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-partial-derivatives-exponential",
  "type": "Example",
  "number": "2.1.32",
  "title": "Partial Derivatives of a Mixed Exponential.",
  "body": " Partial Derivatives of a Mixed Exponential  Compute the partial derivatives of .     "
},
{
  "id": "def-gradient",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-gradient",
  "type": "Definition",
  "number": "2.1.33",
  "title": "Gradient.",
  "body": " Gradient   For a partially differentiable function , where , the gradient of at is the column vector of all partial derivatives:    "
},
{
  "id": "ex-gradient-paraboloid",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-gradient-paraboloid",
  "type": "Example",
  "number": "2.1.34",
  "title": "Gradient of the Normal Paraboloid.",
  "body": " Gradient of the Normal Paraboloid  Let . We compute the gradient and then interpret geometrically how it is related to the graph and the level curves of .   At every point , the gradient points radially outwards from the origin — in the direction of steepest ascent on the paraboloid.   For the paraboloid , the gradient points radially outwards on the contour plot and corresponds to the direction of steepest ascent on the surface.      "
},
{
  "id": "rem-tangent-plane",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-tangent-plane",
  "type": "Remark",
  "number": "2.1.36",
  "title": "Local Linear Approximation and the Tangent Plane.",
  "body": " Local Linear Approximation and the Tangent Plane  For a single-variable function , the tangent line at gives the best linear approximation: For a two-variable function , the tangent line is replaced by the tangent plane . Provided the tangent plane exists at , its equation is    For a concave surface, the tangent plane is easy to distinguish as the plane that best approximates the graph near .      "
},
{
  "id": "rem-no-tangent-plane",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-no-tangent-plane",
  "type": "Remark",
  "number": "2.1.38",
  "title": "Partial Derivatives Can Exist Without a Tangent Plane.",
  "body": " Partial Derivatives Can Exist Without a Tangent Plane  Existence of all partial derivatives at a point does not guarantee a tangent plane. Consider . In the -plane ( ): , so . Likewise . Along the diagonal we have , while the candidate tangent plane from the partial derivatives is the constant plane . Hence the remainder is , and for , which does not tend to . So is not differentiable at . Yet the graph near the origin cannot be approximated by a plane, because the function behaves differently in oblique directions. Total differentiability is a strictly stronger requirement.   The function has vanishing partial derivatives at the origin, but the graph still has a ridge there and cannot be approximated by a single tangent plane.      "
},
{
  "id": "def-total-differentiability",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-total-differentiability",
  "type": "Definition",
  "number": "2.1.40",
  "title": "Differentiable Function.",
  "body": " Differentiable Function       is called differentiable (or totally differentiable ) at if there exists a vector such that where the remainder satisfies This condition formalises mathematically the geometric idea that can be approximated near by its tangent plane, because the remainder is negligible compared with the distance to . The linear part is the tangent plane  .      "
},
{
  "id": "thm-c1-implies-differentiable",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#thm-c1-implies-differentiable",
  "type": "Theorem",
  "number": "2.1.41",
  "title": "Continuously Partially Differentiable Implies Differentiable.",
  "body": " Continuously Partially Differentiable Implies Differentiable   If is partially differentiable on an open set and all partial derivatives are continuous on , then is differentiable on . In other words, every function is totally differentiable.   "
},
{
  "id": "ex-tangent-plane-rational",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-tangent-plane-rational",
  "type": "Example",
  "number": "2.1.42",
  "title": "Tangent Plane and Gradient of a Rational Function.",
  "body": " Tangent Plane and Gradient of a Rational Function  Let . In the following, we investigate this function step by step: first its domain and level curves, then its gradient. Finally, we will investigate at which points the plane is parallel to the -plane.      Domain. The denominator for all , so .     Level curves. The level set requires , i.e.\\ . For these are concentric circles around the origin.     Gradient.  Thus The gradient points radially towards the origin.     Tangent plane parallel to the -plane. The tangent plane is parallel to the -plane if and only if . From the formula above this forces , the unique critical point. At this point , so the tangent plane is .     "
},
{
  "id": "ex-linear-approximation-3d",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-linear-approximation-3d",
  "type": "Example",
  "number": "2.1.43",
  "title": "Linear Approximation of a Three-Variable Function.",
  "body": " Linear Approximation of a Three-Variable Function  We now determine the linear approximation of the function at the point .  First, . Then: The tangent plane (linear approximation) is therefore   "
},
{
  "id": "def-directional-derivative",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-directional-derivative",
  "type": "Definition",
  "number": "2.1.44",
  "title": "Directional Derivative.",
  "body": " Directional Derivative   Let be differentiable at and let be a unit vector ( ).     The directional derivative of at in direction is     For a differentiable function, the directional derivative equals the dot product of the gradient with :        The directional derivative measures the slope of along the line through in the direction .    PGF diagram of a surface with a point above the domain, a direction vector in the base plane, and the corresponding slope on the surface representing the directional derivative.    "
},
{
  "id": "ex-directional-derivative",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-directional-derivative",
  "type": "Example",
  "number": "2.1.46",
  "title": "Computing a Directional Derivative.",
  "body": " Computing a Directional Derivative  Let and . Find the rate of change of in the direction .      Normalise:  , so .     Compute the gradient at :       Directional derivative:       "
},
{
  "id": "rem-gradient-geometry",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-gradient-geometry",
  "type": "Remark",
  "number": "2.1.47",
  "title": "Geometric Meaning of the Gradient.",
  "body": " Geometric Meaning of the Gradient  Writing the directional derivative as where is the angle between and , reveals two important facts:     The rate of change is maximised when , i.e., when is parallel to . Therefore, the gradient points in the direction of steepest ascent .    The rate of change is zero when . Therefore, level curves are everywhere orthogonal to the gradient .      The gradient is perpendicular to the level curve through and points in the direction where the function increases most rapidly.      "
},
{
  "id": "rem-gradient-descent",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#rem-gradient-descent",
  "type": "Remark",
  "number": "2.1.49",
  "title": "Application: Gradient Descent in Machine Learning.",
  "body": " Application: Gradient Descent in Machine Learning  Consider fitting a linear model to data points . The mean squared error is a function of two variables and . The gradient descent algorithm iteratively updates in the direction of (steepest descent), reducing the error at each step. This is one of the foundational algorithms in modern machine learning.   Gradient descent follows successive steps in the direction of steepest decrease until it approaches a minimum of the error function.      "
},
{
  "id": "def-higher-order-partial-derivatives",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-higher-order-partial-derivatives",
  "type": "Definition",
  "number": "2.1.51",
  "title": "Partial Derivatives of Higher Order.",
  "body": " Partial Derivatives of Higher Order   Let be partially differentiable on an open set . If the partial derivatives are themselves partially differentiable, we can form the second-order partial derivatives : Iterating this process gives partial derivatives of any order.   "
},
{
  "id": "ex-higher-order-exponential",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-higher-order-exponential",
  "type": "Example",
  "number": "2.1.52",
  "title": "Second-Order Partial Derivatives.",
  "body": " Second-Order Partial Derivatives  Compute all second-order partial derivatives of .  First-order partial derivatives: Second-order partial derivatives: Note that the two mixed partial derivatives are equal: .  "
},
{
  "id": "thm-schwarz",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#thm-schwarz",
  "type": "Theorem",
  "number": "2.1.53",
  "title": "Schwarz’ Theorem (Symmetry of Mixed Partials).",
  "body": " Schwarz' Theorem (Symmetry of Mixed Partials)   Let be defined on an open set . Assume that all second-order partial derivatives of exist and are continuous on , and let . Then for all : The analogous symmetry holds for partial derivatives of third and higher order.   "
},
{
  "id": "def-hessian-matrix",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#def-hessian-matrix",
  "type": "Definition",
  "number": "2.1.54",
  "title": "Hessian Matrix.",
  "body": " Hessian Matrix   Let be defined on an open set , and assume that all second-order partial derivatives of are continuous on . Let . The Hessian matrix of at is the matrix of all second-order partial derivatives: By , is symmetric .   "
},
{
  "id": "ex-hessian-exponential",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#ex-hessian-exponential",
  "type": "Example",
  "number": "2.1.55",
  "title": "Hessian Matrix of a Two-Variable Function.",
  "body": " Hessian Matrix of a Two-Variable Function  For (cf.\\ ): As predicted by Schwarz' theorem, this matrix is symmetric.  "
},
{
  "id": "exer-domain-semisphere",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#exer-domain-semisphere",
  "type": "Exercise",
  "number": "2.1.5.1",
  "title": "Recognise the Domain.",
  "body": " Recognise the Domain   Consider the function Which set is its domain?     All of  Incorrect. The expression under the square root must be non-negative.     Correct. The square root requires , which is the closed disk of radius .     Incorrect. Equality gives only the boundary circle, but interior points are allowed too.     Incorrect. Outside the circle, the radicand is negative.    "
},
{
  "id": "exer-path-test-continuity",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#exer-path-test-continuity",
  "type": "Exercise",
  "number": "2.1.5.2",
  "title": "Use of a Path Test.",
  "body": " Use of a Path Test   Suppose two different paths approaching the same point produce two different function-value limits. What can you conclude?     The limit at does not exist, so the function is not continuous there.  Correct. Different path limits immediately rule out the existence of a single multivariate limit.    The function is still continuous if the two paths are straight lines.  Incorrect. Any two approach paths with different limits are enough to disprove continuity.    The function is continuous if one of the two limits equals .  Incorrect. Continuity requires all approach paths to give the same limit.    No conclusion is possible; one must check every path.  Incorrect. A single mismatch already proves that the limit does not exist.    "
},
{
  "id": "exer-gradient-directional-derivative-basic",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#exer-gradient-directional-derivative-basic",
  "type": "Exercise",
  "number": "2.1.5.3",
  "title": "Gradient and Directional Derivative.",
  "body": " Gradient and Directional Derivative   Let Compute the gradient at and the directional derivative at that point in the direction     First compute the partial derivatives: Hence   The directional derivative is the dot product with the unit vector :    "
},
{
  "id": "exer-hessian-basic",
  "level": "2",
  "url": "section-functions-continuity-partial-derivatives.html#exer-hessian-basic",
  "type": "Exercise",
  "number": "2.1.5.4",
  "title": "Compute a Hessian Matrix.",
  "body": " Compute a Hessian Matrix   Compute the Hessian matrix of     The first-order partial derivatives are Differentiating again gives Therefore    "
},
{
  "id": "section-error-propagation-taylor-extrema",
  "level": "1",
  "url": "section-error-propagation-taylor-extrema.html",
  "type": "Section",
  "number": "2.2",
  "title": "Error Propagation, Taylor Expansion, and Extrema",
  "body": " Error Propagation, Taylor Expansion, and Extrema   This section develops three closely related applications of partial derivatives and the Hessian matrix. We begin with error propagation : using the gradient to bound how measurement uncertainties in the inputs propagate to an uncertainty in a computed output. We then derive and apply the multivariate Taylor expansion , which approximates a smooth function near a given point by a polynomial involving the gradient and the Hessian. Finally, we use the second-order Taylor polynomial to classify local extrema : the Hessian matrix tells us whether a critical point is a local minimum, local maximum, or saddle point.    Error Propagation   In engineering experiments, every measured quantity carries an uncertainty. When a derived result is computed from several measurements, those individual uncertainties combine to produce an uncertainty in the final result. The gradient provides a systematic tool for quantifying this effect: it linearises the output function around the measured point, turning the problem of estimating the output error into a straightforward evaluation of partial derivatives.     The Idea of Error Propagation  Consider a derived quantity computed from measured variables. Write the true (unknown) input as , where is the measured (nominal) value and is the measurement uncertainty.  The resulting error in is Replacing this difference by its first-order linear approximation (the tangent plane at , cf. ): Taking absolute values and applying the triangle inequality to this linear approximation yields the first-order estimate Each partial derivative acts as a sensitivity factor : it tells us how strongly a small change in affects the output . The estimate becomes more reliable when the measurement errors are small and higher-order terms can be neglected.     Maximal Absolute and Relative Error   Let be differentiable at , and let be small measurement errors. All partial derivatives below are evaluated at .      Maximal absolute error: the exact error is . Its first-order estimate is      Maximal relative error: provided , the exact relative error is . Its first-order estimate is          Error Propagation in a Free-Fall Experiment  A ball is dropped from rest. The height of fall and the travel time are measured, and the gravitational acceleration is computed from , giving The measurements and their uncertainties are What is the resulting uncertainty in ?   Step 1: partial derivatives of .     Step 2: bound the absolute error. Using the error propagation formula with , , , and :    Result. The nominal value is , so the estimated gravitational acceleration with its uncertainty is The dominant contribution comes from the height measurement, since the sensitivity factor multiplied by is substantially larger than the time contribution.  This example also shows a practical engineering lesson: improving the precision of the measurement with the largest sensitivity contribution gives the biggest reduction in the final output uncertainty.     Multivariate Taylor Expansion   In single-variable calculus, the Taylor polynomial provides the best polynomial approximation of a smooth function near a given point. The same idea extends to functions of several variables: the second-order Taylor polynomial replaces the tangent line by a tangent paraboloid , capturing not just the slope but also the curvature of the function near the expansion point. This quadratic approximation is the foundation for the extremum classification developed in .     Derivation of the Multivariate Taylor Formula  Let with , and fix a base point and a direction . Assume that has continuous second-order partial derivatives near . Consider the single-variable function . Applying the univariate second-order Taylor formula to at :   We compute the derivatives of at .   First derivative: By the definition of the directional derivative (cf. ):    Second derivative: Differentiating once more, the chain rule gives where is the Hessian matrix at (cf. ). The expression is the quadratic form associated with the Hessian, evaluated at .  Setting and writing (so ) yields the multivariate Taylor expansion, with a remainder that is small compared with .     Multivariate Taylor Expansion of Order 2   Let be a function of variables whose second-order partial derivatives exist and are continuous on an open set . Let be such that the line segment connecting them lies entirely in . Then where the remainder satisfies   Explicitly, the three terms of the Taylor polynomial are:    Zeroth order:  — the function value at the expansion point.     First order:  — the tangent plane correction (linear term).     Second order:  — the curvature correction (quadratic term).         Taylor Polynomial of at the Origin  Determine the second-order Taylor polynomial of at .   Step 1: function value.     Step 2: gradient at .     Step 3: Hessian matrix at . The second-order partial derivatives of are: Evaluating at :    Step 4: assemble the Taylor polynomial.    The quadratic term encodes the curvature of the surface: the factor on reflects that curves twice as steeply in the -direction as in the -direction near the origin.  Since , this result also agrees with the familiar single-variable series for after substituting and discarding all terms of degree at least .    The Taylor Polynomial as a Local Approximation  Near , the second-order Taylor polynomial approximates by a paraboloid: an elliptic paraboloid when is definite (positive or negative), or a hyperbolic paraboloid (saddle shape) when is indefinite. This geometric picture motivates the extremum classification in : the type of paraboloid that best fits the graph of at a critical point determines whether that point is a local minimum, maximum, or saddle point.     Local Extrema of Multivariable Functions   One of the central applications of differential calculus is finding where a function attains its largest or smallest values. For a single-variable function , a necessary condition for a local extremum at is that the tangent line is horizontal: . The analogous condition in higher dimensions requires that the tangent plane is horizontal, i.e., the gradient vanishes. To distinguish minima, maxima, and saddle points among the critical points, we analyse the second-order Taylor polynomial via the Hessian matrix.     Local Maximum, Minimum, and Extreme Point   Let and .      has a local maximum (respectively local minimum ) at if there exists an open neighbourhood of such that If the inequality is strict ( resp. ), the extremum is called strict (or isolated ).     is a local extreme point if has a local maximum or minimum there.         Necessary Condition for a Local Extremum   Let be open and let be partially differentiable at . If has a local extreme point at , then   A point at which is called a critical point of .    Fix any coordinate direction and consider the single-variable function for close to . Because is a local extremum of , the point is a local extremum of . The single-variable necessary condition therefore gives . But . Since this holds for every , all partial derivatives vanish, so .     Critical Points Need Not Be Extreme Points  As in the single-variable case, the vanishing of the gradient is necessary but not sufficient for an extremum. The standard example is the saddle point : for , the origin satisfies , yet increases from the origin in the -direction and decreases in the -direction, so is neither a maximum nor a minimum. To determine the nature of a critical point, we must look at second-order information.     Sufficient Condition via the Taylor Polynomial  Let be a critical point of , so . Applying the second-order Taylor expansion (cf. ), the linear term vanishes and we obtain The sign of near is therefore determined by the quadratic form with :     If for every nonzero (i.e., is positive definite), then for nearby : has a strict local minimum at .    If for every nonzero (i.e., is negative definite), then for nearby : has a strict local maximum at .    If takes both positive and negative values (i.e., is indefinite), then increases in some directions and decreases in others: has a saddle point at .     If the Hessian is only semi-definite, the quadratic term alone is not decisive; then higher-order terms must be examined.     Contour-line sketches of the three basic quadratic models near a critical point: concentric circles for a minimum, concentric circles with decreasing height for a maximum, and hyperbolas for a saddle point.        Classification of Critical Points via the Hessian   Let be a function of variables whose second-order partial derivatives exist and are continuous. Let be a critical point, i.e., .     positive definite   has a strict local minimum at .      negative definite   has a strict local maximum at .      indefinite   has a saddle point at .   If is positive or negative semi-definite (but not definite), the test is inconclusive.    By the second-order Taylor formula, because the linear term vanishes at a critical point. The remainder satisfies . Hence, for sufficiently close to , the sign of is governed by the quadratic form associated with the Hessian. Positive definiteness gives positivity for every nonzero displacement and therefore a strict local minimum; negative definiteness gives a strict local maximum; and an indefinite Hessian yields nearby directions with both positive and negative change, so the point is a saddle point.      Hessian Determinant Criterion for Functions of Two Variables   For a function of two variables with continuous second-order partial derivatives, let be a critical point. Write where , etc.     If and , then is a strict local minimum .    If and , then is a strict local maximum .    If , then is a saddle point .    If , the criterion is inconclusive.        Practical Procedure for Two-Variable Extrema  To find and classify all local extrema of a smooth function :      Find critical points: solve , i.e., both equations and simultaneously.     Compute the Hessian at each critical point: calculate , , and and evaluate at the critical point.     Apply the determinant criterion ( ): evaluate and check the sign of if .        Critical Points of  Consider . Find and classify all local extreme points.   Step 1: find critical points.  Since always and always, the first equation requires . With , the second equation becomes , which holds only for . The unique critical point is .   Step 2: Hessian at .  Evaluating at :    Step 3: classification.  .  By , the function has a saddle point at . The surface rises in the -direction (where ) and falls in the -direction (where ).     Critical Points of  Consider on the domain . Find and classify all local extreme points.   Step 1: find critical points.  The second equation gives (since ). Substituting into the first equation: . The unique critical point is .   Step 2: Hessian at .  Evaluating at :    Step 3: classification.  .  By , has a saddle point at .     Local Minimum of a Paraboloid  Consider . Find and classify all local extreme points.   Step 1: find critical points.  From the first equation, . Substituting into the second: . Then . The unique critical point is .   Step 2: Hessian. Since , , are constant:    Step 3: classification.  and .  By , has a strict local minimum at .    The workflow for local extrema is now complete: find the critical points from , then use the Hessian to decide whether the second-order Taylor polynomial behaves like a bowl, an upside-down bowl, or a saddle. This gives a direct bridge from local approximation to optimisation.     Check Your Understanding   Interpret an Error Estimate   In the first-order estimate which input contributes the most to the output uncertainty?     The one with the largest product .  Correct. The sensitivity factor and the size of the input uncertainty matter together.    Always the variable with the largest measured value.  Incorrect. A large nominal value alone does not determine the propagated error.    Always the variable with the smallest uncertainty.  Incorrect. A smaller uncertainty usually contributes less, not more.    All variables contribute equally.  Incorrect. The contribution depends on both sensitivity and uncertainty size.      Estimate an Absolute Error   Let At the measured point , the uncertainties are and . Use the first-order formula to estimate the maximal absolute error in .    We compute the partial derivatives: At , this gives   Therefore the first-order absolute error estimate is So the estimated maximal absolute error is .     Second-Order Taylor Polynomial   Determine the second-order Taylor polynomial at the origin for     We have The first-order partial derivatives are so   The second-order partial derivatives are Hence   Therefore      Read the Hessian Criterion   Let be a critical point of a twice continuously differentiable function of two variables. If what does the Hessian criterion say?     is a strict local minimum.  Incorrect. A negative determinant means the Hessian is indefinite.    is a strict local maximum.  Incorrect. A strict maximum would require a negative definite Hessian, not just a negative determinant.    is a saddle point.  Correct. In two variables, means the quadratic form takes both signs.    The test is inconclusive.  Incorrect. The test is inconclusive when the determinant is , not when it is negative.      "
},
{
  "id": "rem-error-propagation-concept",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-error-propagation-concept",
  "type": "Remark",
  "number": "2.2.1",
  "title": "The Idea of Error Propagation.",
  "body": " The Idea of Error Propagation  Consider a derived quantity computed from measured variables. Write the true (unknown) input as , where is the measured (nominal) value and is the measurement uncertainty.  The resulting error in is Replacing this difference by its first-order linear approximation (the tangent plane at , cf. ): Taking absolute values and applying the triangle inequality to this linear approximation yields the first-order estimate Each partial derivative acts as a sensitivity factor : it tells us how strongly a small change in affects the output . The estimate becomes more reliable when the measurement errors are small and higher-order terms can be neglected.  "
},
{
  "id": "def-error-propagation-bounds",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#def-error-propagation-bounds",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Maximal Absolute and Relative Error.",
  "body": " Maximal Absolute and Relative Error   Let be differentiable at , and let be small measurement errors. All partial derivatives below are evaluated at .      Maximal absolute error: the exact error is . Its first-order estimate is      Maximal relative error: provided , the exact relative error is . Its first-order estimate is       "
},
{
  "id": "ex-gravity-error-propagation",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#ex-gravity-error-propagation",
  "type": "Example",
  "number": "2.2.3",
  "title": "Error Propagation in a Free-Fall Experiment.",
  "body": " Error Propagation in a Free-Fall Experiment  A ball is dropped from rest. The height of fall and the travel time are measured, and the gravitational acceleration is computed from , giving The measurements and their uncertainties are What is the resulting uncertainty in ?   Step 1: partial derivatives of .     Step 2: bound the absolute error. Using the error propagation formula with , , , and :    Result. The nominal value is , so the estimated gravitational acceleration with its uncertainty is The dominant contribution comes from the height measurement, since the sensitivity factor multiplied by is substantially larger than the time contribution.  This example also shows a practical engineering lesson: improving the precision of the measurement with the largest sensitivity contribution gives the biggest reduction in the final output uncertainty.  "
},
{
  "id": "rem-taylor-derivation",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-taylor-derivation",
  "type": "Remark",
  "number": "2.2.4",
  "title": "Derivation of the Multivariate Taylor Formula.",
  "body": " Derivation of the Multivariate Taylor Formula  Let with , and fix a base point and a direction . Assume that has continuous second-order partial derivatives near . Consider the single-variable function . Applying the univariate second-order Taylor formula to at :   We compute the derivatives of at .   First derivative: By the definition of the directional derivative (cf. ):    Second derivative: Differentiating once more, the chain rule gives where is the Hessian matrix at (cf. ). The expression is the quadratic form associated with the Hessian, evaluated at .  Setting and writing (so ) yields the multivariate Taylor expansion, with a remainder that is small compared with .  "
},
{
  "id": "thm-multivariate-taylor",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#thm-multivariate-taylor",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "Multivariate Taylor Expansion of Order 2.",
  "body": " Multivariate Taylor Expansion of Order 2   Let be a function of variables whose second-order partial derivatives exist and are continuous on an open set . Let be such that the line segment connecting them lies entirely in . Then where the remainder satisfies   Explicitly, the three terms of the Taylor polynomial are:    Zeroth order:  — the function value at the expansion point.     First order:  — the tangent plane correction (linear term).     Second order:  — the curvature correction (quadratic term).      "
},
{
  "id": "ex-taylor-exp-two-variables",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#ex-taylor-exp-two-variables",
  "type": "Example",
  "number": "2.2.6",
  "title": "Taylor Polynomial of <span class=\"process-math\">\\(e^{x+y^2}\\)<\/span> at the Origin.",
  "body": " Taylor Polynomial of at the Origin  Determine the second-order Taylor polynomial of at .   Step 1: function value.     Step 2: gradient at .     Step 3: Hessian matrix at . The second-order partial derivatives of are: Evaluating at :    Step 4: assemble the Taylor polynomial.    The quadratic term encodes the curvature of the surface: the factor on reflects that curves twice as steeply in the -direction as in the -direction near the origin.  Since , this result also agrees with the familiar single-variable series for after substituting and discarding all terms of degree at least .  "
},
{
  "id": "rem-taylor-as-approximation",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-taylor-as-approximation",
  "type": "Remark",
  "number": "2.2.7",
  "title": "The Taylor Polynomial as a Local Approximation.",
  "body": " The Taylor Polynomial as a Local Approximation  Near , the second-order Taylor polynomial approximates by a paraboloid: an elliptic paraboloid when is definite (positive or negative), or a hyperbolic paraboloid (saddle shape) when is indefinite. This geometric picture motivates the extremum classification in : the type of paraboloid that best fits the graph of at a critical point determines whether that point is a local minimum, maximum, or saddle point.  "
},
{
  "id": "def-local-extremum",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#def-local-extremum",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Local Maximum, Minimum, and Extreme Point.",
  "body": " Local Maximum, Minimum, and Extreme Point   Let and .      has a local maximum (respectively local minimum ) at if there exists an open neighbourhood of such that If the inequality is strict ( resp. ), the extremum is called strict (or isolated ).     is a local extreme point if has a local maximum or minimum there.      "
},
{
  "id": "thm-necessary-condition-extremum",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#thm-necessary-condition-extremum",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "Necessary Condition for a Local Extremum.",
  "body": " Necessary Condition for a Local Extremum   Let be open and let be partially differentiable at . If has a local extreme point at , then   A point at which is called a critical point of .    Fix any coordinate direction and consider the single-variable function for close to . Because is a local extremum of , the point is a local extremum of . The single-variable necessary condition therefore gives . But . Since this holds for every , all partial derivatives vanish, so .   "
},
{
  "id": "rem-necessary-not-sufficient",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-necessary-not-sufficient",
  "type": "Remark",
  "number": "2.2.10",
  "title": "Critical Points Need Not Be Extreme Points.",
  "body": " Critical Points Need Not Be Extreme Points  As in the single-variable case, the vanishing of the gradient is necessary but not sufficient for an extremum. The standard example is the saddle point : for , the origin satisfies , yet increases from the origin in the -direction and decreases in the -direction, so is neither a maximum nor a minimum. To determine the nature of a critical point, we must look at second-order information.  "
},
{
  "id": "rem-sufficient-condition-taylor",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-sufficient-condition-taylor",
  "type": "Remark",
  "number": "2.2.11",
  "title": "Sufficient Condition via the Taylor Polynomial.",
  "body": " Sufficient Condition via the Taylor Polynomial  Let be a critical point of , so . Applying the second-order Taylor expansion (cf. ), the linear term vanishes and we obtain The sign of near is therefore determined by the quadratic form with :     If for every nonzero (i.e., is positive definite), then for nearby : has a strict local minimum at .    If for every nonzero (i.e., is negative definite), then for nearby : has a strict local maximum at .    If takes both positive and negative values (i.e., is indefinite), then increases in some directions and decreases in others: has a saddle point at .     If the Hessian is only semi-definite, the quadratic term alone is not decisive; then higher-order terms must be examined.  "
},
{
  "id": "fig-critical-point-contours",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#fig-critical-point-contours",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " Contour-line sketches of the three basic quadratic models near a critical point: concentric circles for a minimum, concentric circles with decreasing height for a maximum, and hyperbolas for a saddle point.     "
},
{
  "id": "thm-hessian-classification",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#thm-hessian-classification",
  "type": "Theorem",
  "number": "2.2.13",
  "title": "Classification of Critical Points via the Hessian.",
  "body": " Classification of Critical Points via the Hessian   Let be a function of variables whose second-order partial derivatives exist and are continuous. Let be a critical point, i.e., .     positive definite   has a strict local minimum at .      negative definite   has a strict local maximum at .      indefinite   has a saddle point at .   If is positive or negative semi-definite (but not definite), the test is inconclusive.    By the second-order Taylor formula, because the linear term vanishes at a critical point. The remainder satisfies . Hence, for sufficiently close to , the sign of is governed by the quadratic form associated with the Hessian. Positive definiteness gives positivity for every nonzero displacement and therefore a strict local minimum; negative definiteness gives a strict local maximum; and an indefinite Hessian yields nearby directions with both positive and negative change, so the point is a saddle point.   "
},
{
  "id": "thm-hessian-criterion-r2",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#thm-hessian-criterion-r2",
  "type": "Theorem",
  "number": "2.2.14",
  "title": "Hessian Determinant Criterion for Functions of Two Variables.",
  "body": " Hessian Determinant Criterion for Functions of Two Variables   For a function of two variables with continuous second-order partial derivatives, let be a critical point. Write where , etc.     If and , then is a strict local minimum .    If and , then is a strict local maximum .    If , then is a saddle point .    If , the criterion is inconclusive.      "
},
{
  "id": "rem-hessian-r2-practice",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#rem-hessian-r2-practice",
  "type": "Remark",
  "number": "2.2.15",
  "title": "Practical Procedure for Two-Variable Extrema.",
  "body": " Practical Procedure for Two-Variable Extrema  To find and classify all local extrema of a smooth function :      Find critical points: solve , i.e., both equations and simultaneously.     Compute the Hessian at each critical point: calculate , , and and evaluate at the critical point.     Apply the determinant criterion ( ): evaluate and check the sign of if .     "
},
{
  "id": "ex-extrema-exp-cosh",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#ex-extrema-exp-cosh",
  "type": "Example",
  "number": "2.2.16",
  "title": "Critical Points of <span class=\"process-math\">\\(e^{-x^2\/2}\\cosh(y)\\)<\/span>.",
  "body": " Critical Points of  Consider . Find and classify all local extreme points.   Step 1: find critical points.  Since always and always, the first equation requires . With , the second equation becomes , which holds only for . The unique critical point is .   Step 2: Hessian at .  Evaluating at :    Step 3: classification.  .  By , the function has a saddle point at . The surface rises in the -direction (where ) and falls in the -direction (where ).  "
},
{
  "id": "ex-extrema-log-function",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#ex-extrema-log-function",
  "type": "Example",
  "number": "2.2.17",
  "title": "Critical Points of <span class=\"process-math\">\\(x(\\ln y - 2x)\\)<\/span>.",
  "body": " Critical Points of  Consider on the domain . Find and classify all local extreme points.   Step 1: find critical points.  The second equation gives (since ). Substituting into the first equation: . The unique critical point is .   Step 2: Hessian at .  Evaluating at :    Step 3: classification.  .  By , has a saddle point at .  "
},
{
  "id": "ex-extrema-paraboloid-minimum",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#ex-extrema-paraboloid-minimum",
  "type": "Example",
  "number": "2.2.18",
  "title": "Local Minimum of a Paraboloid.",
  "body": " Local Minimum of a Paraboloid  Consider . Find and classify all local extreme points.   Step 1: find critical points.  From the first equation, . Substituting into the second: . Then . The unique critical point is .   Step 2: Hessian. Since , , are constant:    Step 3: classification.  and .  By , has a strict local minimum at .  "
},
{
  "id": "exer-error-propagation-dominant-term",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#exer-error-propagation-dominant-term",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "Interpret an Error Estimate.",
  "body": " Interpret an Error Estimate   In the first-order estimate which input contributes the most to the output uncertainty?     The one with the largest product .  Correct. The sensitivity factor and the size of the input uncertainty matter together.    Always the variable with the largest measured value.  Incorrect. A large nominal value alone does not determine the propagated error.    Always the variable with the smallest uncertainty.  Incorrect. A smaller uncertainty usually contributes less, not more.    All variables contribute equally.  Incorrect. The contribution depends on both sensitivity and uncertainty size.    "
},
{
  "id": "exer-error-propagation-product",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#exer-error-propagation-product",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "Estimate an Absolute Error.",
  "body": " Estimate an Absolute Error   Let At the measured point , the uncertainties are and . Use the first-order formula to estimate the maximal absolute error in .    We compute the partial derivatives: At , this gives   Therefore the first-order absolute error estimate is So the estimated maximal absolute error is .   "
},
{
  "id": "exer-taylor-polynomial-easy",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#exer-taylor-polynomial-easy",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "Second-Order Taylor Polynomial.",
  "body": " Second-Order Taylor Polynomial   Determine the second-order Taylor polynomial at the origin for     We have The first-order partial derivatives are so   The second-order partial derivatives are Hence   Therefore    "
},
{
  "id": "exer-hessian-criterion-saddle",
  "level": "2",
  "url": "section-error-propagation-taylor-extrema.html#exer-hessian-criterion-saddle",
  "type": "Exercise",
  "number": "2.2.4.4",
  "title": "Read the Hessian Criterion.",
  "body": " Read the Hessian Criterion   Let be a critical point of a twice continuously differentiable function of two variables. If what does the Hessian criterion say?     is a strict local minimum.  Incorrect. A negative determinant means the Hessian is indefinite.    is a strict local maximum.  Incorrect. A strict maximum would require a negative definite Hessian, not just a negative determinant.    is a saddle point.  Correct. In two variables, means the quadratic form takes both signs.    The test is inconclusive.  Incorrect. The test is inconclusive when the determinant is , not when it is negative.    "
},
{
  "id": "section-first-order-odes",
  "level": "1",
  "url": "section-first-order-odes.html",
  "type": "Section",
  "number": "3.1",
  "title": "First-Order ODEs",
  "body": " First-Order ODEs   An ordinary differential equation (ODE) relates an unknown function to its derivatives. This section develops the theory and solution methods for first-order ODEs, the most fundamental class. We begin by defining ODEs and clarifying what a solution is. We then study how to extract qualitative information from an ODE without solving it, using slope fields and sign arguments. Finally, we treat the two main solvable classes in full: separable ODEs (solved by integrating both sides after separating variables) and linear first-order ODEs (solved by the variation-of-constants formula). Throughout, engineering applications — population models, RC circuits — illustrate each concept.    Ordinary Differential Equations and Their Solutions   Many processes in engineering and the natural sciences are most naturally described not by an explicit formula for an unknown quantity, but by a relationship between that quantity and its rates of change. Such a relationship is called a differential equation . In this section we define ordinary differential equations (ODEs), clarify what it means to solve one, and introduce the distinction between general and particular solutions.     Population Growth: A Motivating Example  We model the growth of a population (for example, a colony of bacteria).   (a) Simple proportional growth. In the simplest case, the growth rate is proportional to the current population size. Let denote the population at time . This assumption translates directly into the equation where is the proportionality constant. The unknown is the function  ; the equation involves both and its derivative . This is a first-order ordinary differential equation , and its solutions describe exponential growth: .   Exponential growth for with initial population .       (b) Logistic growth. A more realistic model assumes that the population approaches a maximum value (normalised to ). The growth rate is proportional both to the current population and to the remaining capacity : This is again a first-order ODE, but its solutions exhibit an S-shaped (sigmoidal) curve: slow initial growth, rapid growth near , and levelling off as .   Logistic growth: the solution rises from and approaches the carrying capacity asymptotically.         Ordinary Differential Equation   An ordinary differential equation (ODE) of order is an equation in an unknown function of a single real variable in which the function and its derivatives up to order appear:      Why Ordinary ?  This definition describes an explicit ODE: the highest derivative is isolated on the left. All ODEs in this section have this form.  The qualifier ordinary signals that the unknown function depends on a single variable. By contrast, a partial differential equation (PDE) involves an unknown function of several variables (e.g.\\ temperature ), with partial derivatives in each variable. The heat equation and the wave equation are classical PDEs and belong to more advanced courses.    Examples of ODEs and Their Orders      is an ODE of order 1 .     is an ODE of order 2 .        Free Fall: Solving by Integration  The position of a mass in free fall with constant downward acceleration satisfies Newton's second law: This is a second-order ODE. Because the right-hand side does not involve or , we can solve it by integrating twice: The general solution  contains two free constants , reflecting the fact that the ODE has order 2.  To determine and one supplies additional conditions:    Initial value problem (IVP): specify and . For example, gives and gives , yielding .     Boundary value problem (BVP): specify and at two different times.       Solution of an ODE; General and Particular Solutions   A solution of the ODE is an -times differentiable function that satisfies the equation for all in its domain.   For the standard solvable families studied in this course, the general solution of an order- ODE contains arbitrary constants (constants of integration).    A particular solution contains no free parameters; it is obtained by imposing initial or boundary conditions.        Verifying a Solution  Which of the following functions satisfies ?  (A)  (B)  (C)  (D)    Answer. We verify option (D): let . Hence Options (A), (B), (C) can be verified to fail by a similar computation.    Check Your Understanding   Recognise the Order   What is the order of the differential equation      First order  Incorrect. The highest derivative is not .    Second order  Incorrect. The equation contains a third derivative.    Third order  Correct. The highest derivative appearing is .    It has no order because the right-hand side is .  Incorrect. The order depends only on the highest derivative of the unknown function.      Verify a Candidate Solution   Verify that solves the ODE     Differentiate: On the other hand, Hence for all , so the function is indeed a solution.       Qualitative Analysis and Slope Fields   Before solving an ODE analytically, it is valuable to understand the qualitative behaviour of its solutions: where are they increasing or decreasing? Are they bounded? Do they level off? Visualising the slope field of an ODE makes these questions accessible without integration and reveals structure that guides the analytic work.     Excluding Functions as Solutions by Graph Shape  Consider the ODE We explain why certain graph shapes are incompatible with being a solution.    Two graph shapes excluded by the ODE : a local maximum would require negative slope, and a transversal crossing of the line would require nonzero slope at the crossing point.          A function with a local maximum has a region of negative slope. But for any solution of this ODE we have everywhere (since and ). A negative slope is impossible.     An increasing function that crosses . At any point where , the ODE gives . A solution must have slope zero whenever it reaches ; a transversal increasing crossing is impossible.     These observations illustrate a powerful principle: the ODE itself tells us the slope at every point on the solution curve, giving direct constraints on the graph without integration.     Identifying an ODE from the Shape of Its Solution  Suppose we observe a bell-shaped solution curve with a single peak at . Which of the following ODEs is consistent with this behaviour?   A bell-shaped candidate solution curve with a single horizontal tangent at the peak .      (A)  (B)  (C)    Answer. At the peak, the slope must be zero: .   (A): . Ruled out.    (B): . Consistent with a peak at .    (C): . Ruled out.   Only equation (B) is consistent. Indeed, solves (B) and has the described bell shape.     Slope Fields  For a first-order ODE , the slope field (or direction field ) is drawn by placing a short line segment at each point with slope . Any solution curve through an initial point is tangent to the slope field everywhere it passes — so sketching a solution amounts to flowing along the arrows from .   Slope field for with two particular solutions (starting from and ). The solutions follow the arrows and never intersect, reflecting uniqueness of the initial value problem.      Observe that the two solution curves never cross. This is not a coincidence: for a first-order ODE with a sufficiently regular right-hand side, the initial value uniquely determines the solution (Picard–Lindelöf theorem, proved in more advanced courses).    Check Your Understanding   Equilibrium Solutions   Consider the ODE Which constant solutions are equilibrium solutions?     Only  Incorrect. There is another constant value that also makes the right-hand side zero.    Only  Incorrect. Both factors of matter.    and  Correct. Both constant values make .    There are no equilibrium solutions.  Incorrect. Equilibria occur when the right-hand side vanishes.      Read Off a Slope   For the ODE what is the slope of a solution curve at the point ?    Substitute and into the right-hand side: So the solution curve has slope at that point.       Separable ODEs   The simplest first-order ODEs that can be solved by explicit integration are the separable ones: the right-hand side factors into a function of alone times a function of alone. This structure lets us move all -dependent terms to one side and all -dependent terms to the other before integrating.     Separable ODE   A first-order ODE is separable if it can be written in the form for functions (depending only on ) and (depending only on ).      Identifying Separable ODEs      , equivalently . Separable with and .     . Not separable : and appear together inside and cannot be factored apart.     . Separable : , so and .     . Not separable : the sum cannot be written as a product of a -function and a -function.        Method of Separation of Variables   To solve the separable ODE :      Separate variables (assuming ):      Integrate both sides using the substitution , :      Solve for from the equation .     Check constant solutions. Determine all constants for which (these were excluded in Step 1) and add the corresponding constant solutions if they are not already included in the general solution.         Solving the Exponential Growth ODE  Solve for .   Step 1: Separate variables (for ):    Step 2: Integrate both sides. With the substitution :    Step 3: Solve for . Applying the exponential function: Writing , we can absorb both the sign and the positive factor into a single nonzero constant and obtain    Step 4: Check constant solutions. The constant function satisfies , so it is also a solution. Including it (corresponding to ) gives the general solution :      Solving the Logistic Growth ODE  Consider the logistic model This is separable with and .  For the special case , , a partial-fraction decomposition gives Integrating the separated equation: Solving for : This is the logistic (sigmoid) function. As it approaches ; as it approaches 0. This confirms the S-shaped behaviour shown in .   The same separation method with general and leads to the engineering form where is determined by the initial value. In addition, the constant functions and are equilibrium solutions because they make the right-hand side vanish.    Check Your Understanding   Identify a Separable ODE   Which of the following differential equations is separable?      Correct. It can be written as .     Incorrect. This is linear, but not already in separated form.     Incorrect. This is not even a first-order ODE.     Incorrect. The variables do not separate into a product of a function of and a function of .      Solve a Simple Separable ODE   Solve the initial value problem     Separate variables: Integrating gives Exponentiating, Using yields . Therefore        Linear First-Order ODEs   A first-order ODE is linear when and appear only to the first power and are never multiplied together or fed into nonlinear functions. Linear ODEs arise throughout engineering: RC circuits, mixing problems, Newton's law of cooling, and many more. Their key feature is that an explicit general solution formula always exists, derived by a technique called variation of constants .     Linear First-Order ODE; Homogeneous and Inhomogeneous   A first-order ODE is linear if it can be written as where and are given functions of .   If , the ODE is homogeneous . Every homogeneous linear first-order ODE is also separable.    If , the ODE is inhomogeneous .         Classifying Linear ODEs      , equivalently . Linear, homogeneous : , .     . Not linear : appears as the argument of .     . Linear, inhomogeneous : , .        General Solution of the Homogeneous Linear First-Order ODE   Let be an antiderivative of , i.e. . The general solution of the homogeneous ODE is     The homogeneous ODE is separable: for , . Integrating: , so . Absorbing the sign and the constant into gives , and the zero solution corresponds to .      Discharging a Capacitor (RC Circuit)  An RC series circuit consists of a resistor with resistance and a capacitor with capacitance connected in a loop. When the capacitor is pre-charged to voltage at time and the circuit is closed with no external source, the capacitor voltage satisfies This is a homogeneous linear first-order ODE with the constant coefficient .   RC series circuit: a resistor and capacitor in a closed loop. No external voltage source is present.      With , the theorem gives Applying the initial condition yields . The particular solution is describing exponential decay with time constant .    Next, we turn from homogeneous equations to inhomogeneous linear ODEs of first order.   Variation of Constants   Fix a point in the interval of interest and set The general solution of the inhomogeneous linear ODE is      Structure of the General Solution  The formula above decomposes naturally into two parts:     is the general solution of the corresponding homogeneous ODE ; it contains the free constant .     is a particular solution of the inhomogeneous ODE.   This additive structure — general homogeneous solution plus a particular inhomogeneous solution — recurs in Section 3-2 for higher-order linear ODEs.    Derivation of Variation of Constants  The general homogeneous solution is . We vary the constant by replacing with an unknown function : Differentiating and substituting into : The two -terms cancel, leaving , i.e. Integrating from to gives Substituting back gives the stated formula.     Charging a Capacitor (RC Circuit with Voltage Source)  Now assume the capacitor is uncharged at and a constant voltage source is switched in. The governing ODE becomes inhomogeneous:    RC circuit with a constant voltage source : the capacitor charges from 0 towards .      We apply variation of constants with , , , : Hence Applying : . The particular solution is an exponential rise from towards the source voltage with the same time constant .   Capacitor voltage during charging: exponential approach from 0 to . The time constant governs the speed.      After one time constant , the voltage has reached , a useful rule of thumb in circuit design.    Check Your Understanding   Identify a Linear First-Order ODE   Which equation is a linear first-order ODE?      Correct. It has the form .     Incorrect. The term makes the equation nonlinear.     Incorrect. The product is nonlinear.     Incorrect. This equation is second order.      Solve a Homogeneous Linear ODE   Solve     This is a homogeneous linear first-order ODE. Rewriting gives Separating variables, Integration yields Hence       "
},
{
  "id": "ex-population-growth-motivation",
  "level": "2",
  "url": "section-first-order-odes.html#ex-population-growth-motivation",
  "type": "Example",
  "number": "3.1.1",
  "title": "Population Growth: A Motivating Example.",
  "body": " Population Growth: A Motivating Example  We model the growth of a population (for example, a colony of bacteria).   (a) Simple proportional growth. In the simplest case, the growth rate is proportional to the current population size. Let denote the population at time . This assumption translates directly into the equation where is the proportionality constant. The unknown is the function  ; the equation involves both and its derivative . This is a first-order ordinary differential equation , and its solutions describe exponential growth: .   Exponential growth for with initial population .       (b) Logistic growth. A more realistic model assumes that the population approaches a maximum value (normalised to ). The growth rate is proportional both to the current population and to the remaining capacity : This is again a first-order ODE, but its solutions exhibit an S-shaped (sigmoidal) curve: slow initial growth, rapid growth near , and levelling off as .   Logistic growth: the solution rises from and approaches the carrying capacity asymptotically.      "
},
{
  "id": "def-ode",
  "level": "2",
  "url": "section-first-order-odes.html#def-ode",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Ordinary Differential Equation.",
  "body": " Ordinary Differential Equation   An ordinary differential equation (ODE) of order is an equation in an unknown function of a single real variable in which the function and its derivatives up to order appear:    "
},
{
  "id": "rem-ode-ordinary",
  "level": "2",
  "url": "section-first-order-odes.html#rem-ode-ordinary",
  "type": "Remark",
  "number": "3.1.5",
  "title": "Why “Ordinary”?",
  "body": " Why Ordinary ?  This definition describes an explicit ODE: the highest derivative is isolated on the left. All ODEs in this section have this form.  The qualifier ordinary signals that the unknown function depends on a single variable. By contrast, a partial differential equation (PDE) involves an unknown function of several variables (e.g.\\ temperature ), with partial derivatives in each variable. The heat equation and the wave equation are classical PDEs and belong to more advanced courses.  "
},
{
  "id": "ex-ode-order-examples",
  "level": "2",
  "url": "section-first-order-odes.html#ex-ode-order-examples",
  "type": "Example",
  "number": "3.1.6",
  "title": "Examples of ODEs and Their Orders.",
  "body": " Examples of ODEs and Their Orders      is an ODE of order 1 .     is an ODE of order 2 .     "
},
{
  "id": "ex-free-fall",
  "level": "2",
  "url": "section-first-order-odes.html#ex-free-fall",
  "type": "Example",
  "number": "3.1.7",
  "title": "Free Fall: Solving by Integration.",
  "body": " Free Fall: Solving by Integration  The position of a mass in free fall with constant downward acceleration satisfies Newton's second law: This is a second-order ODE. Because the right-hand side does not involve or , we can solve it by integrating twice: The general solution  contains two free constants , reflecting the fact that the ODE has order 2.  To determine and one supplies additional conditions:    Initial value problem (IVP): specify and . For example, gives and gives , yielding .     Boundary value problem (BVP): specify and at two different times.     "
},
{
  "id": "def-ode-solution",
  "level": "2",
  "url": "section-first-order-odes.html#def-ode-solution",
  "type": "Definition",
  "number": "3.1.8",
  "title": "Solution of an ODE; General and Particular Solutions.",
  "body": " Solution of an ODE; General and Particular Solutions   A solution of the ODE is an -times differentiable function that satisfies the equation for all in its domain.   For the standard solvable families studied in this course, the general solution of an order- ODE contains arbitrary constants (constants of integration).    A particular solution contains no free parameters; it is obtained by imposing initial or boundary conditions.      "
},
{
  "id": "ex-verify-solution",
  "level": "2",
  "url": "section-first-order-odes.html#ex-verify-solution",
  "type": "Example",
  "number": "3.1.9",
  "title": "Verifying a Solution.",
  "body": " Verifying a Solution  Which of the following functions satisfies ?  (A)  (B)  (C)  (D)    Answer. We verify option (D): let . Hence Options (A), (B), (C) can be verified to fail by a similar computation.  "
},
{
  "id": "exer-ode-intro-order",
  "level": "2",
  "url": "section-first-order-odes.html#exer-ode-intro-order",
  "type": "Exercise",
  "number": "3.1.1.1",
  "title": "Recognise the Order.",
  "body": " Recognise the Order   What is the order of the differential equation      First order  Incorrect. The highest derivative is not .    Second order  Incorrect. The equation contains a third derivative.    Third order  Correct. The highest derivative appearing is .    It has no order because the right-hand side is .  Incorrect. The order depends only on the highest derivative of the unknown function.    "
},
{
  "id": "exer-ode-intro-verify",
  "level": "2",
  "url": "section-first-order-odes.html#exer-ode-intro-verify",
  "type": "Exercise",
  "number": "3.1.1.2",
  "title": "Verify a Candidate Solution.",
  "body": " Verify a Candidate Solution   Verify that solves the ODE     Differentiate: On the other hand, Hence for all , so the function is indeed a solution.   "
},
{
  "id": "ex-graphical-exclusion",
  "level": "2",
  "url": "section-first-order-odes.html#ex-graphical-exclusion",
  "type": "Example",
  "number": "3.1.10",
  "title": "Excluding Functions as Solutions by Graph Shape.",
  "body": " Excluding Functions as Solutions by Graph Shape  Consider the ODE We explain why certain graph shapes are incompatible with being a solution.    Two graph shapes excluded by the ODE : a local maximum would require negative slope, and a transversal crossing of the line would require nonzero slope at the crossing point.          A function with a local maximum has a region of negative slope. But for any solution of this ODE we have everywhere (since and ). A negative slope is impossible.     An increasing function that crosses . At any point where , the ODE gives . A solution must have slope zero whenever it reaches ; a transversal increasing crossing is impossible.     These observations illustrate a powerful principle: the ODE itself tells us the slope at every point on the solution curve, giving direct constraints on the graph without integration.  "
},
{
  "id": "ex-identify-ode-from-graph",
  "level": "2",
  "url": "section-first-order-odes.html#ex-identify-ode-from-graph",
  "type": "Example",
  "number": "3.1.12",
  "title": "Identifying an ODE from the Shape of Its Solution.",
  "body": " Identifying an ODE from the Shape of Its Solution  Suppose we observe a bell-shaped solution curve with a single peak at . Which of the following ODEs is consistent with this behaviour?   A bell-shaped candidate solution curve with a single horizontal tangent at the peak .      (A)  (B)  (C)    Answer. At the peak, the slope must be zero: .   (A): . Ruled out.    (B): . Consistent with a peak at .    (C): . Ruled out.   Only equation (B) is consistent. Indeed, solves (B) and has the described bell shape.  "
},
{
  "id": "rem-slope-field",
  "level": "2",
  "url": "section-first-order-odes.html#rem-slope-field",
  "type": "Remark",
  "number": "3.1.14",
  "title": "Slope Fields.",
  "body": " Slope Fields  For a first-order ODE , the slope field (or direction field ) is drawn by placing a short line segment at each point with slope . Any solution curve through an initial point is tangent to the slope field everywhere it passes — so sketching a solution amounts to flowing along the arrows from .   Slope field for with two particular solutions (starting from and ). The solutions follow the arrows and never intersect, reflecting uniqueness of the initial value problem.      Observe that the two solution curves never cross. This is not a coincidence: for a first-order ODE with a sufficiently regular right-hand side, the initial value uniquely determines the solution (Picard–Lindelöf theorem, proved in more advanced courses).  "
},
{
  "id": "exer-qualitative-equilibria",
  "level": "2",
  "url": "section-first-order-odes.html#exer-qualitative-equilibria",
  "type": "Exercise",
  "number": "3.1.2.1",
  "title": "Equilibrium Solutions.",
  "body": " Equilibrium Solutions   Consider the ODE Which constant solutions are equilibrium solutions?     Only  Incorrect. There is another constant value that also makes the right-hand side zero.    Only  Incorrect. Both factors of matter.    and  Correct. Both constant values make .    There are no equilibrium solutions.  Incorrect. Equilibria occur when the right-hand side vanishes.    "
},
{
  "id": "exer-qualitative-slope-at-point",
  "level": "2",
  "url": "section-first-order-odes.html#exer-qualitative-slope-at-point",
  "type": "Exercise",
  "number": "3.1.2.2",
  "title": "Read Off a Slope.",
  "body": " Read Off a Slope   For the ODE what is the slope of a solution curve at the point ?    Substitute and into the right-hand side: So the solution curve has slope at that point.   "
},
{
  "id": "def-separable-ode",
  "level": "2",
  "url": "section-first-order-odes.html#def-separable-ode",
  "type": "Definition",
  "number": "3.1.16",
  "title": "Separable ODE.",
  "body": " Separable ODE   A first-order ODE is separable if it can be written in the form for functions (depending only on ) and (depending only on ).   "
},
{
  "id": "ex-separable-identification",
  "level": "2",
  "url": "section-first-order-odes.html#ex-separable-identification",
  "type": "Example",
  "number": "3.1.17",
  "title": "Identifying Separable ODEs.",
  "body": " Identifying Separable ODEs      , equivalently . Separable with and .     . Not separable : and appear together inside and cannot be factored apart.     . Separable : , so and .     . Not separable : the sum cannot be written as a product of a -function and a -function.     "
},
{
  "id": "thm-separation-of-variables",
  "level": "2",
  "url": "section-first-order-odes.html#thm-separation-of-variables",
  "type": "Theorem",
  "number": "3.1.18",
  "title": "Method of Separation of Variables.",
  "body": " Method of Separation of Variables   To solve the separable ODE :      Separate variables (assuming ):      Integrate both sides using the substitution , :      Solve for from the equation .     Check constant solutions. Determine all constants for which (these were excluded in Step 1) and add the corresponding constant solutions if they are not already included in the general solution.      "
},
{
  "id": "ex-separation-exponential-growth",
  "level": "2",
  "url": "section-first-order-odes.html#ex-separation-exponential-growth",
  "type": "Example",
  "number": "3.1.19",
  "title": "Solving the Exponential Growth ODE.",
  "body": " Solving the Exponential Growth ODE  Solve for .   Step 1: Separate variables (for ):    Step 2: Integrate both sides. With the substitution :    Step 3: Solve for . Applying the exponential function: Writing , we can absorb both the sign and the positive factor into a single nonzero constant and obtain    Step 4: Check constant solutions. The constant function satisfies , so it is also a solution. Including it (corresponding to ) gives the general solution :   "
},
{
  "id": "ex-separation-logistic-growth",
  "level": "2",
  "url": "section-first-order-odes.html#ex-separation-logistic-growth",
  "type": "Example",
  "number": "3.1.20",
  "title": "Solving the Logistic Growth ODE.",
  "body": " Solving the Logistic Growth ODE  Consider the logistic model This is separable with and .  For the special case , , a partial-fraction decomposition gives Integrating the separated equation: Solving for : This is the logistic (sigmoid) function. As it approaches ; as it approaches 0. This confirms the S-shaped behaviour shown in .   The same separation method with general and leads to the engineering form where is determined by the initial value. In addition, the constant functions and are equilibrium solutions because they make the right-hand side vanish.  "
},
{
  "id": "exer-separable-identify-simple",
  "level": "2",
  "url": "section-first-order-odes.html#exer-separable-identify-simple",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "Identify a Separable ODE.",
  "body": " Identify a Separable ODE   Which of the following differential equations is separable?      Correct. It can be written as .     Incorrect. This is linear, but not already in separated form.     Incorrect. This is not even a first-order ODE.     Incorrect. The variables do not separate into a product of a function of and a function of .    "
},
{
  "id": "exer-separable-solve-growth",
  "level": "2",
  "url": "section-first-order-odes.html#exer-separable-solve-growth",
  "type": "Exercise",
  "number": "3.1.3.2",
  "title": "Solve a Simple Separable ODE.",
  "body": " Solve a Simple Separable ODE   Solve the initial value problem     Separate variables: Integrating gives Exponentiating, Using yields . Therefore    "
},
{
  "id": "def-linear-first-order-ode",
  "level": "2",
  "url": "section-first-order-odes.html#def-linear-first-order-ode",
  "type": "Definition",
  "number": "3.1.21",
  "title": "Linear First-Order ODE; Homogeneous and Inhomogeneous.",
  "body": " Linear First-Order ODE; Homogeneous and Inhomogeneous   A first-order ODE is linear if it can be written as where and are given functions of .   If , the ODE is homogeneous . Every homogeneous linear first-order ODE is also separable.    If , the ODE is inhomogeneous .      "
},
{
  "id": "ex-linear-ode-classification",
  "level": "2",
  "url": "section-first-order-odes.html#ex-linear-ode-classification",
  "type": "Example",
  "number": "3.1.22",
  "title": "Classifying Linear ODEs.",
  "body": " Classifying Linear ODEs      , equivalently . Linear, homogeneous : , .     . Not linear : appears as the argument of .     . Linear, inhomogeneous : , .     "
},
{
  "id": "thm-homogeneous-linear-ode",
  "level": "2",
  "url": "section-first-order-odes.html#thm-homogeneous-linear-ode",
  "type": "Theorem",
  "number": "3.1.23",
  "title": "General Solution of the Homogeneous Linear First-Order ODE.",
  "body": " General Solution of the Homogeneous Linear First-Order ODE   Let be an antiderivative of , i.e. . The general solution of the homogeneous ODE is     The homogeneous ODE is separable: for , . Integrating: , so . Absorbing the sign and the constant into gives , and the zero solution corresponds to .   "
},
{
  "id": "ex-discharging-capacitor",
  "level": "2",
  "url": "section-first-order-odes.html#ex-discharging-capacitor",
  "type": "Example",
  "number": "3.1.24",
  "title": "Discharging a Capacitor (RC Circuit).",
  "body": " Discharging a Capacitor (RC Circuit)  An RC series circuit consists of a resistor with resistance and a capacitor with capacitance connected in a loop. When the capacitor is pre-charged to voltage at time and the circuit is closed with no external source, the capacitor voltage satisfies This is a homogeneous linear first-order ODE with the constant coefficient .   RC series circuit: a resistor and capacitor in a closed loop. No external voltage source is present.      With , the theorem gives Applying the initial condition yields . The particular solution is describing exponential decay with time constant .  "
},
{
  "id": "thm-variation-of-constants",
  "level": "2",
  "url": "section-first-order-odes.html#thm-variation-of-constants",
  "type": "Theorem",
  "number": "3.1.26",
  "title": "Variation of Constants.",
  "body": " Variation of Constants   Fix a point in the interval of interest and set The general solution of the inhomogeneous linear ODE is    "
},
{
  "id": "rem-solution-structure",
  "level": "2",
  "url": "section-first-order-odes.html#rem-solution-structure",
  "type": "Remark",
  "number": "3.1.27",
  "title": "Structure of the General Solution.",
  "body": " Structure of the General Solution  The formula above decomposes naturally into two parts:     is the general solution of the corresponding homogeneous ODE ; it contains the free constant .     is a particular solution of the inhomogeneous ODE.   This additive structure — general homogeneous solution plus a particular inhomogeneous solution — recurs in Section 3-2 for higher-order linear ODEs.  "
},
{
  "id": "subsec-linear-first-order-odes-10",
  "level": "2",
  "url": "section-first-order-odes.html#subsec-linear-first-order-odes-10",
  "type": "Proof",
  "number": "3.1.4.1",
  "title": "Derivation of Variation of Constants.",
  "body": " Derivation of Variation of Constants  The general homogeneous solution is . We vary the constant by replacing with an unknown function : Differentiating and substituting into : The two -terms cancel, leaving , i.e. Integrating from to gives Substituting back gives the stated formula.  "
},
{
  "id": "ex-charging-capacitor",
  "level": "2",
  "url": "section-first-order-odes.html#ex-charging-capacitor",
  "type": "Example",
  "number": "3.1.28",
  "title": "Charging a Capacitor (RC Circuit with Voltage Source).",
  "body": " Charging a Capacitor (RC Circuit with Voltage Source)  Now assume the capacitor is uncharged at and a constant voltage source is switched in. The governing ODE becomes inhomogeneous:    RC circuit with a constant voltage source : the capacitor charges from 0 towards .      We apply variation of constants with , , , : Hence Applying : . The particular solution is an exponential rise from towards the source voltage with the same time constant .   Capacitor voltage during charging: exponential approach from 0 to . The time constant governs the speed.      After one time constant , the voltage has reached , a useful rule of thumb in circuit design.  "
},
{
  "id": "exer-linear-first-order-identify",
  "level": "2",
  "url": "section-first-order-odes.html#exer-linear-first-order-identify",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "Identify a Linear First-Order ODE.",
  "body": " Identify a Linear First-Order ODE   Which equation is a linear first-order ODE?      Correct. It has the form .     Incorrect. The term makes the equation nonlinear.     Incorrect. The product is nonlinear.     Incorrect. This equation is second order.    "
},
{
  "id": "exer-linear-first-order-homogeneous-solution",
  "level": "2",
  "url": "section-first-order-odes.html#exer-linear-first-order-homogeneous-solution",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "Solve a Homogeneous Linear ODE.",
  "body": " Solve a Homogeneous Linear ODE   Solve     This is a homogeneous linear first-order ODE. Rewriting gives Separating variables, Integration yields Hence    "
},
{
  "id": "section-higher-order-linear-odes",
  "level": "1",
  "url": "section-higher-order-linear-odes.html",
  "type": "Section",
  "number": "3.2",
  "title": "Higher-Order Linear ODEs",
  "body": " Higher-Order Linear ODEs   Section 3-1 developed systematic solution methods for first-order ODEs. Many engineering models, however, require higher derivatives: a vibrating mass-spring-damper, the deflection of a loaded beam, and the current in an RLC circuit all yield second- (or higher-) order differential equations.  This section treats the most important subclass: linear ODEs with constant coefficients . We begin by defining the class and identifying its structural features, then develop the characteristic polynomial method for the homogeneous case (Section 3-2.1–3-2.2). For the inhomogeneous case we use the method of undetermined coefficients (Section 3-2.3), whose guessing strategy is completely determined by the form of the right-hand side. The section closes with the harmonic oscillator (Section 3-2.4), the central application that unifies all three sub-topics: the free response uses the homogeneous theory, the forced response uses undetermined coefficients, and the resonance phenomenon illustrates why the distinction between natural frequency and driving frequency matters critically in engineering design.    Linear ODEs of Higher Order   In Section 3-1 we developed systematic solution methods for first-order ODEs. Many physical and engineering phenomena, however, require higher-order equations. A vibrating spring, the bending of a structural beam, or the current in an RLC circuit all give rise naturally to second-order (or higher) differential equations.  This section focuses on the most tractable and practically important subclass: linear ODEs with constant coefficients . For this class a complete algorithmic solution procedure exists, based on factoring a polynomial (the characteristic polynomial ) and reading off the solutions from its roots.     Higher-Order ODEs in Engineering  Two classical engineering models immediately lead to higher-order linear ODEs with constant coefficients.     Harmonic oscillator (mass-spring-damper). A mass attached to a spring of stiffness and a damper of coefficient satisfies where is the displacement from rest and is an external force. This is a second-order linear ODE with constant coefficients.     Elastic beam bending. Under a distributed transverse load , the deflection of a homogeneous beam with bending stiffness satisfies This is a fourth-order linear ODE.     A mass-spring-damper model. The restoring spring force, damping force, and external input combine to produce a second-order equation for the displacement .       Beam bending under a distributed load. The fourth derivative appears because curvature and internal bending moments must be differentiated to balance the transverse load.      Both examples share the structural feature we will exploit: the unknown function and all its derivatives appear only linearly , and the coefficients are constant .     Linear ODE of Order   An ODE of order is linear if it can be written as where the coefficient functions  and the right-hand side  are given. The unknown function and its derivatives appear only to the first power and are never multiplied together or nested inside nonlinear functions.  Important special cases:    Constant coefficients: all are constants.     Homogeneous:  for all .     Inhomogeneous:  .        What Linearity Rules Out  The linearity condition says that never appears inside a nonlinear expression. Terms such as , , , or all violate linearity. By contrast, coefficients like or are fine, because they depend only on the independent variable  , not on the unknown .     Classifying Higher-Order ODEs  Determine for each ODE: is it linear? If so, is it homogeneous? Does it have constant coefficients?                    Classification.     Not linear: the term is a nonlinear function of .     Linear, not homogeneous, constant coefficients: all derivatives of appear linearly; ; the coefficients do not depend on .     Linear, homogeneous, non-constant coefficients:  , but the coefficient of depends on .     The solution methods developed in this section apply to cases like (2): linear, with constant coefficients.     Classification of higher-order ODEs. This section treats the shaded class: linear, constant-coefficient ODEs — the most algorithmically accessible family.       Check Your Understanding   Classify the Equation   Consider Which description is correct?     Third-order, linear, inhomogeneous, with constant coefficients  Correct. The coefficients of are constants, and the right-hand side is nonzero.    Third-order, nonlinear, homogeneous  Incorrect. The equation is linear, and it is not homogeneous because of .    Second-order, linear, homogeneous  Incorrect. The highest derivative is third order.    First-order, nonlinear, with variable coefficients  Incorrect. None of those labels fits this equation.      Associated Homogeneous Equation   Write down the associated homogeneous equation for     The associated homogeneous equation is obtained by replacing the right-hand side by :        Homogeneous Linear ODEs with Constant Coefficients   We now develop a complete solution procedure for homogeneous linear ODEs with constant coefficients: The key idea is that exponential trial functions lead naturally to a polynomial in — the characteristic polynomial . Its roots determine the entire solution space.     Motivating Case Study  Consider the homogeneous third-order ODE We guess a solution of the form . Computing derivatives: , , . Substituting into the ODE and dividing by : This algebraic equation — the characteristic polynomial evaluated at — must be satisfied. Once we find its roots, we can read off the solutions to the ODE.     Characteristic Polynomial   The characteristic polynomial of the homogeneous linear ODE with constant coefficients is the degree- polynomial The ODE and its characteristic polynomial are obtained from each other by the formal substitution .     Counting the Roots  By the fundamental theorem of algebra, every polynomial of degree over the complex numbers has exactly roots counted with multiplicity. Each root of contributes one or more linearly independent solutions to the ODE, and together they span the entire solution space (which has dimension ).    Why complex roots produce sine and cosine. Even when the ODE has real coefficients, it is useful to temporarily allow complex-valued trial solutions. If is a complex root, then The real part and the imaginary part are real-valued solutions of the same homogeneous ODE. This is why oscillating sine and cosine terms appear whenever the characteristic polynomial has a complex conjugate pair of roots.    Solutions from the Roots of the Characteristic Polynomial   Let be the characteristic polynomial of a homogeneous linear ODE with constant coefficients, and let be a root of .   Case 1 — simple real root. If is a simple root, then is a solution.   Case 2 — simple pair of complex conjugate roots. If and (with , ) are simple roots, then the two real solutions are linearly independent solutions.   Case 3 — root of multiplicity .     Case 3a — real root of multiplicity . The linearly independent solutions are      Case 3b — complex root of multiplicity . Conjugacy forces to also be a root of multiplicity . The linearly independent real solutions are         Where the factors come from. Write the differential operator on the left-hand side as , where means differentiation with respect to . If is a root of multiplicity , then the characteristic polynomial contains the factor . Correspondingly, the differential operator contains the factor .  Now observe the first step: Applying a second time gives zero. More generally, each factor is killed after applying exactly times. Therefore, if the root has multiplicity , the functions all solve the ODE. The powers of are thus not a trick: they record how many times the same root occurs in the characteristic polynomial.    Summary: how the type of a root of the characteristic polynomial determines the corresponding fundamental solutions. The multiplicity of each root is matched by exactly linearly independent solutions (or for complex pairs).       Principle: adding and scaling homogeneous solutions. Suppose are solutions of the homogeneous linear ODE Choose real numbers , multiply each solution by its chosen number , and add the results: Then this new function is again a solution of the same homogeneous ODE. Such a sum is called a linear combination of the functions .   Proof. Let denote the left-hand side of the ODE: . Differentiation respects scaling and addition, so Since each solves the homogeneous ODE, each is zero. Hence so is again a solution.    General Solution of Homogeneous Linear ODEs   Consider the homogeneous linear ODE with constant coefficients and let be its characteristic polynomial. Applying to all roots of , counted with multiplicity, yields linearly independent solutions . The general solution is Initial conditions (e.g. values of ) pin down the constants .      Homogeneous ODE — Double Real Root  Find the general solution of .   Solution. The characteristic polynomial is The root has multiplicity (Case 3a). The two fundamental solutions are The general solution is     Homogeneous ODE — Simple Complex Conjugate Roots  Find the general solution of .   Solution. The characteristic polynomial is . Using the quadratic formula: Thus , (Case 2). The two fundamental solutions are The general solution is     Homogeneous ODE of Order 3 — Mixed Roots  Find the general solution of given that is a root.   Solution. The characteristic polynomial is . Since is a root, we factor out by polynomial division: The roots of are (i.e. , ). Applying Cases 1 and 2: The general solution is     Check Your Understanding   General Solution from Characteristic Roots   Suppose the characteristic polynomial of a homogeneous linear ODE has the two roots and . What is the general solution?      Correct. Each simple real root contributes one exponential solution.     Incorrect. Trigonometric terms arise from complex roots, not from two real roots.     Incorrect. The factor appears only for repeated roots.     Incorrect. The two fundamental solutions must appear independently.      Solve a Simple Homogeneous ODE   Solve     The characteristic polynomial is So the roots are and . Therefore the general solution is        Inhomogeneous Linear ODEs — Method of Undetermined Coefficients   We now turn to the inhomogeneous linear ODE with constant coefficients: The crucial structural fact is the superposition principle : the general solution is the sum of the general homogeneous solution (which we already know how to find) and any particular solution of the inhomogeneous equation.     Superposition Principle   Let be any particular solution of the inhomogeneous ODE Let be the general solution of the corresponding homogeneous ODE (i.e.\\ with ). Then the general solution of the inhomogeneous ODE is and every solution of the inhomogeneous ODE has this form for some choice of .       Method of Undetermined Coefficients  Building upon the superposition principle ( ), we do not need to find all solutions of the inhomogeneous ODE from scratch. Since we already know how to solve the underlying homogeneous ODE, in order to solve an inhomogeneous ODE, it is enough to find one particular solution satisfying the equation with the given right-hand side ; then the full solution is .  The method of undetermined coefficients is one possible way to find such a particular solution. Its guiding intuition is that a linear physical system often responds to an external excitation with an answer of the same basic structure: a polynomial input suggests a polynomial response, an exponential input suggests an exponential response, and a sinusoidal input suggests a combination of sine and cosine. We therefore write down a trial function with that structure, leave some coefficients unknown, substitute the trial function into the ODE, and determine the unknown coefficients algebraically.  This leads to the following three-step method for solving an inhomogeneous linear ODE with constant coefficients.   Step 1 — Solve the homogeneous ODE. Find using the characteristic polynomial. The root-to-solution translation is given by , and the form of the full homogeneous solution is given by .   Step 2 — Choose a trial function for one particular solution . Use the table in . First write the natural trial function suggested by . Then check whether that same shape already appears among the homogeneous solutions. If it does, multiply the whole trial function by the required power of ; this resonance correction is explained in . Finally substitute into the ODE and solve for the unknown constants in the trial function.   Step 3 — Use superposition to write the general solution. By , . Apply initial conditions to determine .     Trial Functions for the Particular Solution   Consider an inhomogeneous linear ODE with constant coefficients and let be the characteristic polynomial of the associated homogeneous ODE. The following table gives the standard trial function for . The constants named or are known from the given right-hand side; the constants named or are unknown and will be determined by substitution.  In the table, the root to check is the complex number that represents the same exponential or oscillating shape as the forcing term. If that number is a root of with multiplicity , multiply the natural trial function by . If it is not a root, use , so no extra factor of is added.       Right-hand side  Root to check  Trial function for    Polynomial            and      and     For a sum of several forcing terms, choose one trial function for each term and add those trial functions together. If the ODE has real coefficients, complex conjugate roots have the same multiplicity, so checking one member of a conjugate pair determines the same value of for the other.     Scope of the Method  The method of undetermined coefficients works well when the forcing term is built from polynomials, exponentials, sines, cosines, or finite sums and products of these functions. It is not a universal method for arbitrary right-hand sides such as or .  That scope restriction is useful to keep in mind: in this section we deliberately stay within the constant-coefficient setting where the forcing term suggests a manageable trial function.    Why the Resonance Factor ?  The case is called resonance . Algebraically, it means that the natural trial function for overlaps with a solution of the associated homogeneous ODE. If we try that overlapping trial function, the homogeneous left-hand side either becomes zero or loses exactly the shape we need, so it cannot produce the required forcing term. Multiplying by moves the trial function to the next related function shape; if the same characteristic root occurs times, we must move steps and multiply by .  This phenomenon has a physical counterpart: when a driving force matches the natural frequency of an undamped oscillator the amplitude grows without bound (resonance).     Inhomogeneous ODE — Polynomial Right-Hand Side  Find the general solution of .   Step 1 — Homogeneous solution. We found earlier ( ) that the characteristic polynomial is and the general homogeneous solution is    Step 2 — Particular solution. The right-hand side is a polynomial of degree 2. Check for resonance: , so is not a root and . Trial function: .  Compute the derivatives and substitute into the left-hand side:  Equating coefficients with : Thus .   Step 3 — General solution.       Inhomogeneous ODE — Resonance with Exponential Forcing  Find the general solution of .   Step 1 — Homogeneous solution.  . Root has multiplicity 2, so    Step 2 — Particular solution. The right-hand side is , so . Since is a root of of multiplicity , we use the resonance trial function .  Compute derivatives (using the product rule twice): Substituting into the ODE: Setting gives .   Step 3 — General solution.       Inhomogeneous ODE — Exponentially Modulated Oscillation  Find the general solution of .   Step 1 — Homogeneous solution.  . Roots: .    Step 2 — Particular solution. The right-hand side has , . The complex frequency is not a root of (since the roots are ), so and the trial function is   Let . After computing via the product rule and comparing coefficients with , one obtains the system Solving: , .   Step 3 — General solution.      Check Your Understanding   Choose a Trial Function   For the ODE which trial function is appropriate for a particular solution?      Correct. A sine forcing generally requires both sine and cosine terms, because derivatives of sine and cosine produce each other.     Incorrect. This is the common incomplete trial function: after differentiating, cosine terms can appear, so both sine and cosine should be included.     Incorrect. Polynomial trial functions are used for polynomial forcing terms, not sinusoidal forcing.     Incorrect. Exponential trial functions are used for exponential forcing terms.      Find a Particular Solution in a Resonance Case   Find one particular solution of     The homogeneous characteristic polynomial is so is already a homogeneous solution. We therefore use the resonance trial function Substituting gives To match the right-hand side , we choose , hence . Thus one particular solution is        Application: The Harmonic Oscillator   The techniques developed in this section apply immediately to one of the most important mechanical systems in engineering: the mass-spring-damper system (also called the harmonic oscillator ). Beyond its direct engineering relevance — suspension systems, vibration isolation, earthquake engineering — it is the canonical model for any physical system exhibiting oscillatory behaviour near an equilibrium.     The Mass-Spring-Damper System  A mass is attached to a fixed support by a spring (stiffness ) and a viscous damper (damping coefficient ). The mass can move vertically; let denote its displacement from the natural rest position.   Schematic of the mass-spring-damper system. The mass hangs from a spring (stiffness ) and moves through a viscous liquid (damping coefficient ). Positive points downward.      Newton's second law gives which, after dividing by and rearranging, becomes Physical reasoning constrains the parameters: (damping is non-negative) and (the spring always restores). Here is called the natural frequency .     Solution Strategy  The harmonic oscillator is the concrete place where the abstract theory of this section comes together. First we solve the homogeneous equation ( ) to understand the system's free motion. Then we add a particular solution for the forced case ( ), exactly as in , to describe how an external excitation changes that motion.     Case 1a — Free Undamped Oscillation ( )   With no damping ( ), equation with reduces to The characteristic polynomial has the purely imaginary roots . The general solution is The system oscillates at frequency with constant amplitude — no decay, no growth.     Free undamped oscillation: a pure sinusoid at frequency with period . The amplitude never changes.        Case 1b — Free Damped Oscillation ( )   With positive damping, the characteristic polynomial has discriminant . Three qualitatively different behaviours arise.   Case 1b.i — Underdamped ( ). Roots: where is the damped natural frequency . General solution: The system oscillates with exponentially decreasing amplitude.   Case 1b.ii — Critically damped ( ). Double root . General solution: The system returns to rest as fast as possible without oscillating — the aperiodic limit case .   Case 1b.iii — Overdamped ( ). Two distinct real roots (both negative, since ). General solution: The system decays to rest without oscillating, but more slowly than in the critically damped case.     The three qualitatively different responses of a free damped harmonic oscillator, plotted for and initial conditions , . Underdamped ( ): oscillatory decay. Critically damped ( ): fastest non-oscillatory return. Overdamped ( ): slow non-oscillatory decay.        Case 2 — Forced Oscillation and Resonance   Now consider an external sinusoidal force applied to a damped oscillator ( ). Using the method of undetermined coefficients with trial function (valid whenever or ), substitution into gives    Solving this linear system yields Hence the particular solution can be rewritten in amplitude-phase form as where the phase shift  satisfies .  The amplitude of the steady-state response is When is small and , the denominator is small and becomes very large — this is the resonance phenomenon.  In the undamped case with driving frequency , the method of undetermined coefficients requires the resonance trial function , and the amplitude grows linearly without bound.     Frequency response of the amplitude for fixed , and several damping values. As the resonance peak at becomes sharper and taller; for it diverges.       How to Read the Frequency-Response Graph  For a fixed damping value , the graph of tells us which driving frequencies are dangerous: tall peaks mean that a small periodic force can produce a large steady-state oscillation.  The peak is highest near when damping is weak. Increasing damping lowers and broadens the peak, which is why damping is an effective engineering tool for suppressing resonance.    Resonance in Engineering: The Tacoma Narrows Bridge  Resonance is not merely a mathematical curiosity. When an external excitation is close to the natural frequency of a structure, even moderate forcing can produce catastrophically large oscillations. A famous historical example is the Tacoma Narrows Bridge (Washington State, USA, 1940), which collapsed just four months after opening due to aerodynamic forces that matched the bridge's natural frequency. Modern structural engineering avoids resonance by careful tuning of natural frequencies away from expected excitation spectra, and by deliberately introducing damping (e.g.\\ tuned mass dampers in skyscrapers).    Check Your Understanding   Recognise Resonance   When is resonance most likely to occur in a forced oscillator?     When the driving frequency is close to the natural frequency and damping is small  Correct. Then the steady-state amplitude can become very large.    When the damping is extremely large  Incorrect. Strong damping suppresses resonance peaks.    Whenever the forcing term is zero  Incorrect. With no forcing, there is no forced resonance.    Only when the natural frequency is zero  Incorrect. Resonance is tied to matching frequencies, not to a zero natural frequency.      Free Undamped Oscillation   Solve the homogeneous ODE     The characteristic equation is so the roots are . Therefore the general solution is       "
},
{
  "id": "ex-higher-order-motivation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-higher-order-motivation",
  "type": "Example",
  "number": "3.2.1",
  "title": "Higher-Order ODEs in Engineering.",
  "body": " Higher-Order ODEs in Engineering  Two classical engineering models immediately lead to higher-order linear ODEs with constant coefficients.     Harmonic oscillator (mass-spring-damper). A mass attached to a spring of stiffness and a damper of coefficient satisfies where is the displacement from rest and is an external force. This is a second-order linear ODE with constant coefficients.     Elastic beam bending. Under a distributed transverse load , the deflection of a homogeneous beam with bending stiffness satisfies This is a fourth-order linear ODE.     A mass-spring-damper model. The restoring spring force, damping force, and external input combine to produce a second-order equation for the displacement .       Beam bending under a distributed load. The fourth derivative appears because curvature and internal bending moments must be differentiated to balance the transverse load.      Both examples share the structural feature we will exploit: the unknown function and all its derivatives appear only linearly , and the coefficients are constant .  "
},
{
  "id": "def-linear-ode-order-n",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#def-linear-ode-order-n",
  "type": "Definition",
  "number": "3.2.4",
  "title": "Linear ODE of Order <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Linear ODE of Order   An ODE of order is linear if it can be written as where the coefficient functions  and the right-hand side  are given. The unknown function and its derivatives appear only to the first power and are never multiplied together or nested inside nonlinear functions.  Important special cases:    Constant coefficients: all are constants.     Homogeneous:  for all .     Inhomogeneous:  .      "
},
{
  "id": "rem-linearity-meaning",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-linearity-meaning",
  "type": "Remark",
  "number": "3.2.5",
  "title": "What Linearity Rules Out.",
  "body": " What Linearity Rules Out  The linearity condition says that never appears inside a nonlinear expression. Terms such as , , , or all violate linearity. By contrast, coefficients like or are fine, because they depend only on the independent variable  , not on the unknown .  "
},
{
  "id": "ex-higher-order-classification",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-higher-order-classification",
  "type": "Example",
  "number": "3.2.6",
  "title": "Classifying Higher-Order ODEs.",
  "body": " Classifying Higher-Order ODEs  Determine for each ODE: is it linear? If so, is it homogeneous? Does it have constant coefficients?                    Classification.     Not linear: the term is a nonlinear function of .     Linear, not homogeneous, constant coefficients: all derivatives of appear linearly; ; the coefficients do not depend on .     Linear, homogeneous, non-constant coefficients:  , but the coefficient of depends on .     The solution methods developed in this section apply to cases like (2): linear, with constant coefficients.  "
},
{
  "id": "fig-higher-order-classification-tree",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#fig-higher-order-classification-tree",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " Classification of higher-order ODEs. This section treats the shaded class: linear, constant-coefficient ODEs — the most algorithmically accessible family.     "
},
{
  "id": "exer-higher-order-classify-equation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-higher-order-classify-equation",
  "type": "Exercise",
  "number": "3.2.1.1",
  "title": "Classify the Equation.",
  "body": " Classify the Equation   Consider Which description is correct?     Third-order, linear, inhomogeneous, with constant coefficients  Correct. The coefficients of are constants, and the right-hand side is nonzero.    Third-order, nonlinear, homogeneous  Incorrect. The equation is linear, and it is not homogeneous because of .    Second-order, linear, homogeneous  Incorrect. The highest derivative is third order.    First-order, nonlinear, with variable coefficients  Incorrect. None of those labels fits this equation.    "
},
{
  "id": "exer-higher-order-associated-homogeneous",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-higher-order-associated-homogeneous",
  "type": "Exercise",
  "number": "3.2.1.2",
  "title": "Associated Homogeneous Equation.",
  "body": " Associated Homogeneous Equation   Write down the associated homogeneous equation for     The associated homogeneous equation is obtained by replacing the right-hand side by :    "
},
{
  "id": "ex-motivating-case-study",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-motivating-case-study",
  "type": "Example",
  "number": "3.2.8",
  "title": "Motivating Case Study.",
  "body": " Motivating Case Study  Consider the homogeneous third-order ODE We guess a solution of the form . Computing derivatives: , , . Substituting into the ODE and dividing by : This algebraic equation — the characteristic polynomial evaluated at — must be satisfied. Once we find its roots, we can read off the solutions to the ODE.  "
},
{
  "id": "def-characteristic-polynomial",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#def-characteristic-polynomial",
  "type": "Definition",
  "number": "3.2.9",
  "title": "Characteristic Polynomial.",
  "body": " Characteristic Polynomial   The characteristic polynomial of the homogeneous linear ODE with constant coefficients is the degree- polynomial The ODE and its characteristic polynomial are obtained from each other by the formal substitution .   "
},
{
  "id": "rem-fundamental-theorem",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-fundamental-theorem",
  "type": "Remark",
  "number": "3.2.10",
  "title": "Counting the Roots.",
  "body": " Counting the Roots  By the fundamental theorem of algebra, every polynomial of degree over the complex numbers has exactly roots counted with multiplicity. Each root of contributes one or more linearly independent solutions to the ODE, and together they span the entire solution space (which has dimension ).  "
},
{
  "id": "thm-solutions-from-roots",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-solutions-from-roots",
  "type": "Theorem",
  "number": "3.2.11",
  "title": "Solutions from the Roots of the Characteristic Polynomial.",
  "body": " Solutions from the Roots of the Characteristic Polynomial   Let be the characteristic polynomial of a homogeneous linear ODE with constant coefficients, and let be a root of .   Case 1 — simple real root. If is a simple root, then is a solution.   Case 2 — simple pair of complex conjugate roots. If and (with , ) are simple roots, then the two real solutions are linearly independent solutions.   Case 3 — root of multiplicity .     Case 3a — real root of multiplicity . The linearly independent solutions are      Case 3b — complex root of multiplicity . Conjugacy forces to also be a root of multiplicity . The linearly independent real solutions are       "
},
{
  "id": "fig-roots-to-solutions",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#fig-roots-to-solutions",
  "type": "Figure",
  "number": "3.2.12",
  "title": "",
  "body": " Summary: how the type of a root of the characteristic polynomial determines the corresponding fundamental solutions. The multiplicity of each root is matched by exactly linearly independent solutions (or for complex pairs).     "
},
{
  "id": "par-homogeneous-scaled-sums",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#par-homogeneous-scaled-sums",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "thm-general-solution-homogeneous",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-general-solution-homogeneous",
  "type": "Theorem",
  "number": "3.2.13",
  "title": "General Solution of Homogeneous Linear ODEs.",
  "body": " General Solution of Homogeneous Linear ODEs   Consider the homogeneous linear ODE with constant coefficients and let be its characteristic polynomial. Applying to all roots of , counted with multiplicity, yields linearly independent solutions . The general solution is Initial conditions (e.g. values of ) pin down the constants .   "
},
{
  "id": "ex-homogeneous-double-real-root",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-homogeneous-double-real-root",
  "type": "Example",
  "number": "3.2.14",
  "title": "Homogeneous ODE — Double Real Root.",
  "body": " Homogeneous ODE — Double Real Root  Find the general solution of .   Solution. The characteristic polynomial is The root has multiplicity (Case 3a). The two fundamental solutions are The general solution is   "
},
{
  "id": "ex-homogeneous-complex-roots",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-homogeneous-complex-roots",
  "type": "Example",
  "number": "3.2.15",
  "title": "Homogeneous ODE — Simple Complex Conjugate Roots.",
  "body": " Homogeneous ODE — Simple Complex Conjugate Roots  Find the general solution of .   Solution. The characteristic polynomial is . Using the quadratic formula: Thus , (Case 2). The two fundamental solutions are The general solution is   "
},
{
  "id": "ex-homogeneous-third-order-mixed",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-homogeneous-third-order-mixed",
  "type": "Example",
  "number": "3.2.16",
  "title": "Homogeneous ODE of Order 3 — Mixed Roots.",
  "body": " Homogeneous ODE of Order 3 — Mixed Roots  Find the general solution of given that is a root.   Solution. The characteristic polynomial is . Since is a root, we factor out by polynomial division: The roots of are (i.e. , ). Applying Cases 1 and 2: The general solution is   "
},
{
  "id": "exer-homogeneous-general-solution-from-roots",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-homogeneous-general-solution-from-roots",
  "type": "Exercise",
  "number": "3.2.2.1",
  "title": "General Solution from Characteristic Roots.",
  "body": " General Solution from Characteristic Roots   Suppose the characteristic polynomial of a homogeneous linear ODE has the two roots and . What is the general solution?      Correct. Each simple real root contributes one exponential solution.     Incorrect. Trigonometric terms arise from complex roots, not from two real roots.     Incorrect. The factor appears only for repeated roots.     Incorrect. The two fundamental solutions must appear independently.    "
},
{
  "id": "exer-homogeneous-solve-simple-constant-coeff",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-homogeneous-solve-simple-constant-coeff",
  "type": "Exercise",
  "number": "3.2.2.2",
  "title": "Solve a Simple Homogeneous ODE.",
  "body": " Solve a Simple Homogeneous ODE   Solve     The characteristic polynomial is So the roots are and . Therefore the general solution is    "
},
{
  "id": "thm-superposition-principle",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-superposition-principle",
  "type": "Theorem",
  "number": "3.2.17",
  "title": "Superposition Principle.",
  "body": " Superposition Principle   Let be any particular solution of the inhomogeneous ODE Let be the general solution of the corresponding homogeneous ODE (i.e.\\ with ). Then the general solution of the inhomogeneous ODE is and every solution of the inhomogeneous ODE has this form for some choice of .   "
},
{
  "id": "alg-undetermined-coefficients-3",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#alg-undetermined-coefficients-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "thm-undetermined-coefficient-guesses",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-undetermined-coefficient-guesses",
  "type": "Theorem",
  "number": "3.2.18",
  "title": "Trial Functions for the Particular Solution.",
  "body": " Trial Functions for the Particular Solution   Consider an inhomogeneous linear ODE with constant coefficients and let be the characteristic polynomial of the associated homogeneous ODE. The following table gives the standard trial function for . The constants named or are known from the given right-hand side; the constants named or are unknown and will be determined by substitution.  In the table, the root to check is the complex number that represents the same exponential or oscillating shape as the forcing term. If that number is a root of with multiplicity , multiply the natural trial function by . If it is not a root, use , so no extra factor of is added.       Right-hand side  Root to check  Trial function for    Polynomial            and      and     For a sum of several forcing terms, choose one trial function for each term and add those trial functions together. If the ODE has real coefficients, complex conjugate roots have the same multiplicity, so checking one member of a conjugate pair determines the same value of for the other.   "
},
{
  "id": "rem-guessing-method-scope",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-guessing-method-scope",
  "type": "Remark",
  "number": "3.2.19",
  "title": "Scope of the Method.",
  "body": " Scope of the Method  The method of undetermined coefficients works well when the forcing term is built from polynomials, exponentials, sines, cosines, or finite sums and products of these functions. It is not a universal method for arbitrary right-hand sides such as or .  That scope restriction is useful to keep in mind: in this section we deliberately stay within the constant-coefficient setting where the forcing term suggests a manageable trial function.  "
},
{
  "id": "rem-resonance-explanation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-resonance-explanation",
  "type": "Remark",
  "number": "3.2.20",
  "title": "Why the Resonance Factor <span class=\"process-math\">\\(t^k\\text{?}\\)<\/span>",
  "body": " Why the Resonance Factor ?  The case is called resonance . Algebraically, it means that the natural trial function for overlaps with a solution of the associated homogeneous ODE. If we try that overlapping trial function, the homogeneous left-hand side either becomes zero or loses exactly the shape we need, so it cannot produce the required forcing term. Multiplying by moves the trial function to the next related function shape; if the same characteristic root occurs times, we must move steps and multiply by .  This phenomenon has a physical counterpart: when a driving force matches the natural frequency of an undamped oscillator the amplitude grows without bound (resonance).  "
},
{
  "id": "ex-inhomogeneous-polynomial-rhs",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-inhomogeneous-polynomial-rhs",
  "type": "Example",
  "number": "3.2.21",
  "title": "Inhomogeneous ODE — Polynomial Right-Hand Side.",
  "body": " Inhomogeneous ODE — Polynomial Right-Hand Side  Find the general solution of .   Step 1 — Homogeneous solution. We found earlier ( ) that the characteristic polynomial is and the general homogeneous solution is    Step 2 — Particular solution. The right-hand side is a polynomial of degree 2. Check for resonance: , so is not a root and . Trial function: .  Compute the derivatives and substitute into the left-hand side:  Equating coefficients with : Thus .   Step 3 — General solution.    "
},
{
  "id": "ex-inhomogeneous-exponential-resonance",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-inhomogeneous-exponential-resonance",
  "type": "Example",
  "number": "3.2.22",
  "title": "Inhomogeneous ODE — Resonance with Exponential Forcing.",
  "body": " Inhomogeneous ODE — Resonance with Exponential Forcing  Find the general solution of .   Step 1 — Homogeneous solution.  . Root has multiplicity 2, so    Step 2 — Particular solution. The right-hand side is , so . Since is a root of of multiplicity , we use the resonance trial function .  Compute derivatives (using the product rule twice): Substituting into the ODE: Setting gives .   Step 3 — General solution.    "
},
{
  "id": "ex-inhomogeneous-complex-exponential-forcing",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-inhomogeneous-complex-exponential-forcing",
  "type": "Example",
  "number": "3.2.23",
  "title": "Inhomogeneous ODE — Exponentially Modulated Oscillation.",
  "body": " Inhomogeneous ODE — Exponentially Modulated Oscillation  Find the general solution of .   Step 1 — Homogeneous solution.  . Roots: .    Step 2 — Particular solution. The right-hand side has , . The complex frequency is not a root of (since the roots are ), so and the trial function is   Let . After computing via the product rule and comparing coefficients with , one obtains the system Solving: , .   Step 3 — General solution.    "
},
{
  "id": "exer-inhomogeneous-guess-polynomial",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-inhomogeneous-guess-polynomial",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "Choose a Trial Function.",
  "body": " Choose a Trial Function   For the ODE which trial function is appropriate for a particular solution?      Correct. A sine forcing generally requires both sine and cosine terms, because derivatives of sine and cosine produce each other.     Incorrect. This is the common incomplete trial function: after differentiating, cosine terms can appear, so both sine and cosine should be included.     Incorrect. Polynomial trial functions are used for polynomial forcing terms, not sinusoidal forcing.     Incorrect. Exponential trial functions are used for exponential forcing terms.    "
},
{
  "id": "exer-inhomogeneous-resonance-exp",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-inhomogeneous-resonance-exp",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "Find a Particular Solution in a Resonance Case.",
  "body": " Find a Particular Solution in a Resonance Case   Find one particular solution of     The homogeneous characteristic polynomial is so is already a homogeneous solution. We therefore use the resonance trial function Substituting gives To match the right-hand side , we choose , hence . Thus one particular solution is    "
},
{
  "id": "subsec-harmonic-oscillator-2-1",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#subsec-harmonic-oscillator-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mass-spring-damper "
},
{
  "id": "ex-spring-pendulum-setup",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#ex-spring-pendulum-setup",
  "type": "Example",
  "number": "3.2.24",
  "title": "The Mass-Spring-Damper System.",
  "body": " The Mass-Spring-Damper System  A mass is attached to a fixed support by a spring (stiffness ) and a viscous damper (damping coefficient ). The mass can move vertically; let denote its displacement from the natural rest position.   Schematic of the mass-spring-damper system. The mass hangs from a spring (stiffness ) and moves through a viscous liquid (damping coefficient ). Positive points downward.      Newton's second law gives which, after dividing by and rearranging, becomes Physical reasoning constrains the parameters: (damping is non-negative) and (the spring always restores). Here is called the natural frequency .  "
},
{
  "id": "rem-harmonic-solution-strategy",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-harmonic-solution-strategy",
  "type": "Remark",
  "number": "3.2.26",
  "title": "Solution Strategy.",
  "body": " Solution Strategy  The harmonic oscillator is the concrete place where the abstract theory of this section comes together. First we solve the homogeneous equation ( ) to understand the system's free motion. Then we add a particular solution for the forced case ( ), exactly as in , to describe how an external excitation changes that motion.  "
},
{
  "id": "thm-undamped-free-oscillation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-undamped-free-oscillation",
  "type": "Theorem",
  "number": "3.2.27",
  "title": "Case 1a — Free Undamped Oscillation (<span class=\"process-math\">\\(\\beta = 0\\)<\/span>).",
  "body": " Case 1a — Free Undamped Oscillation ( )   With no damping ( ), equation with reduces to The characteristic polynomial has the purely imaginary roots . The general solution is The system oscillates at frequency with constant amplitude — no decay, no growth.   "
},
{
  "id": "fig-undamped-oscillation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#fig-undamped-oscillation",
  "type": "Figure",
  "number": "3.2.28",
  "title": "",
  "body": " Free undamped oscillation: a pure sinusoid at frequency with period . The amplitude never changes.     "
},
{
  "id": "thm-damped-free-oscillation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-damped-free-oscillation",
  "type": "Theorem",
  "number": "3.2.29",
  "title": "Case 1b — Free Damped Oscillation (<span class=\"process-math\">\\(\\beta &gt; 0\\)<\/span>).",
  "body": " Case 1b — Free Damped Oscillation ( )   With positive damping, the characteristic polynomial has discriminant . Three qualitatively different behaviours arise.   Case 1b.i — Underdamped ( ). Roots: where is the damped natural frequency . General solution: The system oscillates with exponentially decreasing amplitude.   Case 1b.ii — Critically damped ( ). Double root . General solution: The system returns to rest as fast as possible without oscillating — the aperiodic limit case .   Case 1b.iii — Overdamped ( ). Two distinct real roots (both negative, since ). General solution: The system decays to rest without oscillating, but more slowly than in the critically damped case.   "
},
{
  "id": "fig-damped-oscillation-cases",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#fig-damped-oscillation-cases",
  "type": "Figure",
  "number": "3.2.30",
  "title": "",
  "body": " The three qualitatively different responses of a free damped harmonic oscillator, plotted for and initial conditions , . Underdamped ( ): oscillatory decay. Critically damped ( ): fastest non-oscillatory return. Overdamped ( ): slow non-oscillatory decay.     "
},
{
  "id": "thm-forced-oscillation",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#thm-forced-oscillation",
  "type": "Theorem",
  "number": "3.2.31",
  "title": "Case 2 — Forced Oscillation and Resonance.",
  "body": " Case 2 — Forced Oscillation and Resonance   Now consider an external sinusoidal force applied to a damped oscillator ( ). Using the method of undetermined coefficients with trial function (valid whenever or ), substitution into gives    Solving this linear system yields Hence the particular solution can be rewritten in amplitude-phase form as where the phase shift  satisfies .  The amplitude of the steady-state response is When is small and , the denominator is small and becomes very large — this is the resonance phenomenon.  In the undamped case with driving frequency , the method of undetermined coefficients requires the resonance trial function , and the amplitude grows linearly without bound.   "
},
{
  "id": "fig-resonance-amplitude-curve",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#fig-resonance-amplitude-curve",
  "type": "Figure",
  "number": "3.2.32",
  "title": "",
  "body": " Frequency response of the amplitude for fixed , and several damping values. As the resonance peak at becomes sharper and taller; for it diverges.     "
},
{
  "id": "rem-reading-frequency-response",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-reading-frequency-response",
  "type": "Remark",
  "number": "3.2.33",
  "title": "How to Read the Frequency-Response Graph.",
  "body": " How to Read the Frequency-Response Graph  For a fixed damping value , the graph of tells us which driving frequencies are dangerous: tall peaks mean that a small periodic force can produce a large steady-state oscillation.  The peak is highest near when damping is weak. Increasing damping lowers and broadens the peak, which is why damping is an effective engineering tool for suppressing resonance.  "
},
{
  "id": "rem-resonance-catastrophe",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#rem-resonance-catastrophe",
  "type": "Remark",
  "number": "3.2.34",
  "title": "Resonance in Engineering: The Tacoma Narrows Bridge.",
  "body": " Resonance in Engineering: The Tacoma Narrows Bridge  Resonance is not merely a mathematical curiosity. When an external excitation is close to the natural frequency of a structure, even moderate forcing can produce catastrophically large oscillations. A famous historical example is the Tacoma Narrows Bridge (Washington State, USA, 1940), which collapsed just four months after opening due to aerodynamic forces that matched the bridge's natural frequency. Modern structural engineering avoids resonance by careful tuning of natural frequencies away from expected excitation spectra, and by deliberately introducing damping (e.g.\\ tuned mass dampers in skyscrapers).  "
},
{
  "id": "exer-harmonic-resonance-concept",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-harmonic-resonance-concept",
  "type": "Exercise",
  "number": "3.2.4.1",
  "title": "Recognise Resonance.",
  "body": " Recognise Resonance   When is resonance most likely to occur in a forced oscillator?     When the driving frequency is close to the natural frequency and damping is small  Correct. Then the steady-state amplitude can become very large.    When the damping is extremely large  Incorrect. Strong damping suppresses resonance peaks.    Whenever the forcing term is zero  Incorrect. With no forcing, there is no forced resonance.    Only when the natural frequency is zero  Incorrect. Resonance is tied to matching frequencies, not to a zero natural frequency.    "
},
{
  "id": "exer-harmonic-undamped-general-solution",
  "level": "2",
  "url": "section-higher-order-linear-odes.html#exer-harmonic-undamped-general-solution",
  "type": "Exercise",
  "number": "3.2.4.2",
  "title": "Free Undamped Oscillation.",
  "body": " Free Undamped Oscillation   Solve the homogeneous ODE     The characteristic equation is so the roots are . Therefore the general solution is    "
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
