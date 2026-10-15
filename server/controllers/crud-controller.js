export const createCrudController = (Model) => ({
  // GET /api/<resource>
  getAll: async (req, res) => {
    try {
      const items = await Model.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // GET /api/<resource>/:id
  getById: async (req, res) => {
    try {
      const item = await Model.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Record not found' });
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ error: 'Invalid ID format' });
    }
  },

  // POST /api/<resource>
  create: async (req, res) => {
    try {
      const newItem = new Model(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // PUT /api/<resource>/:id
  update: async (req, res) => {
    try {
      const updatedItem = await Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedItem) return res.status(404).json({ error: 'Record not found' });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // DELETE /api/<resource>/:id
  delete: async (req, res) => {
    try {
      const deletedItem = await Model.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ error: 'Record not found' });
      res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid ID format' });
    }
  }
});