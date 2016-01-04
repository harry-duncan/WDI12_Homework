class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
    	t.text :name
    	t.text :soundcloud_link
    	t.timestamps
    end
  end
end
