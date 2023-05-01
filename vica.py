ruta = "C:\Users\lmpal\OneDrive\Escritorio\suscriptores_vica (1).csv"

# Define the names of each column in the DataFrame
columns = ['año_nac', 'genero', 'id_documento', 'localidad', 'CP_Socio', 'lat_socio',
           'long_socio', 'prov_socio', 'tipocredencial', 'cat_credencial', 'condicion',
           'fecha', 'pago_socio', 'monto_descuento', 'porc_descuento', 'tipo_transaccion',
           'credencial_virtual', 'RazonSocial', 'NombreCuenta', 'NombreCuentaPadre', 'rubro',
           'subrubro', 'lat_comercio', 'long_comercio', 'pais_comercio', 'Prov_comercio',
           'ciudad_comercio']

# Read the CSV file into a pandas DataFrame
df = pd.read_csv(file_path, names=columns, sep=';', error_bad_lines=False)

# Select only the columns needed for one hot encoding
one_hot_cols = ['genero', 'localidad', 'prov_socio', 'tipocredencial', 'cat_credencial', 'condicion',
                'tipo_transaccion', 'rubro', 'subrubro', 'Prov_comercio', 'ciudad_comercio']

# Loop through each column and perform one hot encoding
for col in one_hot_cols:
    # Get the unique values in the column
    unique_values = df[col].unique()
    # Create a binary column for each unique value
    for value in unique_values:
        df[col + '_' + str(value)] = (df[col] == value).astype(int)
    # Drop the original column after one hot encoding
    df = df.drop(columns=[col])

# Print the first few rows of the DataFrame with one hot encoding
print(df.head())