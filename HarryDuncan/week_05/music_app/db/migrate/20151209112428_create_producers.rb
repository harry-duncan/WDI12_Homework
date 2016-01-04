class CreateProducers < ActiveRecord::Migration
  def change
    create_table :producers do |t|
    	t.text :name
    	t.text :image
    	t.text :stage_name
    	t.text :genre
    	t.text :soundcloud_link
    	t.timestamps
    end
  end
end
