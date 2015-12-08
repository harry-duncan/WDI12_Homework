# == Schema Information
#
# Table name: oceans
#
#  id            :integer          primary key
#  name          :text
#  area          :float
#  average_depth :float
#  deepest_depth :float
#

class Ocean < ActiveRecord::Base
end
