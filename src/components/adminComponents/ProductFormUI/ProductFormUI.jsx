export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit}) => {

    return (
        <section>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={product.name} onChange={onChange} required />
            
                {errors.name && <span className="error">{errors.name}</span>}
            
            </div>
            <div>
                <label htmlFor="price">Precio</label>
                <input type="number" name="price" value={product.price} onChange={onChange} required />
                {errors.price && <span className="error">{errors.price}</span>} 
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <textarea name="description" value={product.description} onChange={onChange} required></textarea>
                {errors.description && <span className="error">{errors.description}</span>}
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <input type="text" name="category" value={product.category} onChange={onChange} required />
                {errors.category && <span className="error">{errors.category}</span>}
            </div>
            <div>
                <label htmlFor="file">Archivo</label>
                <input type="file" name="file" accept="image/*" onChange={(e)=> onFileChange(e.target.files?.[0] ?? null)} required />
                {errors.file && <span className="error">{errors.file}</span>}
            </div>
            <button className="btn" type="submit" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar'}
            </button>
        </form>
        </section>
    );
}